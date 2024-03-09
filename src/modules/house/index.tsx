import { useDeleteHouseMutation, useHouseQuery } from "@/api/house";
import { IconUser } from "@/assets/index";
import { Pagination, Search, ShowData } from "@/components/datatable";
import { DataTable } from "@/components/datatable/Datatable";
import ModalData from "@/components/modal/ModalData";
import { HouseResponse } from "@/interfaces/house";
import { useSearchStore } from "@/stores/search";
import { Button, HStack, Stack, Tag, Text, useMediaQuery, useToast } from "@chakra-ui/react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FormHouse from "./form";
import ModalMessage from "@/components/modal/ModalMessage";
import { formatDateFullIndonesia } from "@/utils/formatter";
import FormHouseholder from "../householder/form";
import HistoryHouseholder from "../householder/history";

const HousePage = () => {
  const toast = useToast();
  const router = useRouter();
  const [confirm, setConfirm] = useState<boolean>(false);
  const [formModal, setFormModal] = useState<boolean>(false);
  const [formHouseholderModal, setFormHouseholderModal] = useState<boolean>(false);
  const [historyHouseholderModal, setHistoryHouseholderModal] = useState<boolean>(false);
  const [detailData, setDetailData] = useState<HouseResponse | null>(null);

  const { search, filter, pagination } = useSearchStore();

  const { data: dataHouses, refetch: houseRefetch } = useHouseQuery({
    keyword: search,
    page: pagination?.page || 1,
    perPage: pagination?.perPage || 10,
  });

  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");

  useEffect(() => {
    if (
      search !== undefined ||
      filter !== undefined ||
      (pagination?.page !== undefined && pagination.perPage !== undefined)
    ) {
      houseRefetch();
    }
  }, [houseRefetch, search, filter, pagination?.perPage, pagination?.page]);

  const columnHelper = createColumnHelper<HouseResponse>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info: CellContext<HouseResponse, any>) => (
        <Text textAlign={"center"}>
          {((pagination?.page || 1) - 1) * (pagination?.perPage || 10) + info.row.index + 1}
        </Text>
      ),
      header: "#",
      meta: { align: "center" },
    }),
    columnHelper.accessor("name", {
      cell: info => <Text>{info.getValue()}</Text>,
      header: "Nama",
    }),
    columnHelper.accessor("house_number", {
      cell: info => <Text>{info.getValue()}</Text>,
      header: "Nomor Rumah",
    }),
    columnHelper.accessor("status", {
      cell: info => {
        let typeStatus: string;
        let labelStatus: string;
        switch (info.getValue()) {
          case 1:
            typeStatus = "success";
            labelStatus = "Dihuni";
            break;
          case 0:
            typeStatus = "cancel";
            labelStatus = "Kosong";
            break;
          default:
            labelStatus = "Kosong";
            typeStatus = "cancel";
        }
        return (
          <Stack gap={1} alignItems={"center"}>
            <Tag variant={typeStatus}>{labelStatus}</Tag>
          </Stack>
        );
      },
      header: "Status",
      meta: { align: "center" },
    }),
    columnHelper.accessor("active_householder.resident.name", {
      cell: info => <Text>{info?.row?.original?.active_householder?.resident?.name}</Text>,
      header: "Penghuni",
    }),
    columnHelper.accessor("active_householder.resident.status", {
      cell: info => {
        let typeStatus: string;
        let labelStatus: string;
        switch (info?.row?.original?.active_householder?.resident?.status) {
          case "permanent":
            typeStatus = "success";
            labelStatus = "Tetap";
            break;
          case "contract":
            typeStatus = "cancel";
            labelStatus = "Kontrak";
            break;
          default:
            labelStatus = "";
            typeStatus = "";
        }
        return (
          <Stack gap={1} alignItems={"center"}>
            <Tag variant={typeStatus}>{labelStatus}</Tag>
          </Stack>
        );
      },
      header: "Status Huni",
      meta: { align: "center" },
    }),
    columnHelper.accessor("active_householder.start_date", {
      cell: info => <Text>{info?.row?.original?.active_householder?.start_date && formatDateFullIndonesia(new Date(info?.row?.original?.active_householder?.start_date || ""))}</Text>,
      header: "Tanggal Mulai",
    }),
    columnHelper.accessor("active_householder.end_date", {
      cell: info => <Text>{info?.row?.original?.active_householder?.end_date && formatDateFullIndonesia(new Date(info?.row?.original?.active_householder?.end_date || ""))}</Text>,
      header: "Tanggal Berakhir",
    }),
    {
      id: "action",
      cell: (info: any) => (
        <HStack gap={1} justifyContent="right">
          <Button
            size={"xs"}
            px={2}
            onClick={() => {
              setDetailData(info.row.original);
              setFormHouseholderModal(true);
            }}
            colorScheme="facebook"
          >
            {!info.row.original.active_householder && info.row.original.status == 0
              ? "Tambah Penghuni"
              : "Edit Penghuni"}
          </Button>
          <Button
            size={"xs"}
            colorScheme="teal"
            px={2}
            onClick={() => {
              setDetailData(info.row.original);
              setHistoryHouseholderModal(true);
            }}
          >
            Riwayat Penghuni
          </Button>
          {info.row.original.active_householder && info.row.original.status == 1 && (
            <Button
              size={"xs"}
              px={2}
              onClick={() => {
                setDetailData(info.row.original);
                setFormModal(true);
              }}
              colorScheme="twitter"
            >
              Pembayaran
            </Button>
          )}
          <Button
            size={"xs"}
            px={2}
            onClick={() => {
              setDetailData(info.row.original);
              setFormModal(true);
            }}
          >
            Edit
          </Button>
          <Button
            size={"xs"}
            px={2}
            variant="outline"
            onClick={() => {
              setDetailData(info.row.original);
              setConfirm(true);
            }}
          >
            Hapus
          </Button>
        </HStack>
      ),
      header: "Aksi",
      meta: { align: "center" },
    },
  ];

  const closeModal = () => {
    setDetailData(null);
    setConfirm(false);
  };

  const closeFormModal = () => {
    setDetailData(null);
    setFormModal(false);
    houseRefetch();
  };

  const closeFormHouseholderModal = () => {
    setDetailData(null);
    setFormHouseholderModal(false);
    houseRefetch();
  };

  const closeHistoryHouseholderModal = () => {
    setDetailData(null);
    setHistoryHouseholderModal(false);
    houseRefetch();
  };

  const { mutate: doDelete } = useDeleteHouseMutation({
    onSuccess: () => {
      closeModal();

      toast({
        title: "Data berhasil Dihapus",
        description: "Anda berhasil menghapus data",
        status: "success",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      houseRefetch();
    },
    onError: (e: any) =>
      toast({
        title: `Data Gagal Dihapus: ${e.message}`,
        status: "error",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      }),
  });

  const deleteData = () => {
    if (detailData) {
      doDelete({ id: detailData?.id });
    }
  };

  return (
    <>
      <Button
        size={"xs"}
        px={2}
        variant="outline"
        onClick={() => {
          setFormModal(true);
        }}
      >
        Tambah Baru
      </Button>
      <Stack p={{ base: 2, md: 4 }} background={"white"} borderRadius={12} gap={{ base: 3, md: 5 }} mt={6}>
        <HStack gap={4}>
          <IconUser width={isBreakpoint ? "32px" : "24px"} height={isBreakpoint ? "32px" : "24px"} color="#FF6633" />
          <Text color={"gray.10"} textStyle={{ base: "h3", md: "h4" }} fontWeight={{ base: 700, md: 700 }}>
            Data Rumah
          </Text>
        </HStack>
        <HStack mb={1} gap={{ base: 0, md: 3 }} w="full">
          <ShowData value={pagination?.perPage || 10} />
          <Search placeholder="Search" marginLeft={{ base: "auto" }} maxW={{ base: "120px", md: 72 }} />
        </HStack>
        <DataTable columns={columns} data={dataHouses?.data.data || []} />
        <Pagination total={dataHouses?.data.last_page || 0} current={dataHouses?.data.current_page || 1} />
      </Stack>

      <ModalData
        open={formModal}
        onClose={closeFormModal}
        size="xl"
        title={detailData ? "Form Edit Rumah" : "Form Tambah Rumah"}
      >
        <FormHouse id={detailData?.id || undefined} onClose={closeFormModal} />
      </ModalData>

      <ModalData
        open={formHouseholderModal}
        onClose={closeFormHouseholderModal}
        size="xl"
        title={"Form Penghuni Rumah"}
      >
        <FormHouseholder id={detailData?.id || undefined} onClose={closeFormHouseholderModal} />
      </ModalData>

      <ModalData
        open={historyHouseholderModal}
        onClose={closeHistoryHouseholderModal}
        size="full"
        title={"Riwayat Penghuni Rumah"}
      >
        <HistoryHouseholder id={detailData?.id || undefined} onClose={closeHistoryHouseholderModal} />
      </ModalData>

      <ModalMessage
        image="/images/notification/warning.png"
        title="Konfirmasi!"
        description="Apakah kamu ingin menghapus data?"
        button1="Ya"
        button2="Tidak"
        open={confirm}
        type="row"
        onClose={closeModal}
        onClick1={deleteData}
        onClick2={closeModal}
      />
    </>
  );
};

export default HousePage;
