import { useDeletePaymentTypeMutation, usePaymentTypeQuery } from "@/api/payment-type";
import { IconUser } from "@/assets/index";
import { Pagination, Search, ShowData } from "@/components/datatable";
import { DataTable } from "@/components/datatable/Datatable";
import ModalData from "@/components/modal/ModalData";
import ModalMessage from "@/components/modal/ModalMessage";
import { PaymentTypeResponse } from "@/interfaces/payment-type";
import { useSearchStore } from "@/stores/search";
import { currency } from "@/utils/formatter";
import { Button, HStack, Stack, Tag, Text, useMediaQuery, useToast } from "@chakra-ui/react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import { useEffect, useState, type FC } from "react";
import FormPaymentType from "./form";

const PaymentTypePage: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [confirm, setConfirm] = useState<boolean>(false);
  const [formModal, setFormModal] = useState<boolean>(false);
  const [detailData, setDetailData] = useState<PaymentTypeResponse | null>(null);

  const { search, filter, pagination } = useSearchStore();

  const { data: dataPaymentTypes, refetch: paymentTypeRefetch } = usePaymentTypeQuery({
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
      paymentTypeRefetch();
    }
  }, [paymentTypeRefetch, search, filter, pagination?.perPage, pagination?.page]);

  const columnHelper = createColumnHelper<PaymentTypeResponse>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info: CellContext<PaymentTypeResponse, any>) => (
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
    columnHelper.accessor("nominal", {
      cell: info => <Text>{currency(info.getValue())}</Text>,
      header: "Nominal",
    }),
    columnHelper.accessor("type", {
      cell: info => {
        let typeStatus: string;
        let labelStatus: string;
        switch (info.getValue()) {
          case "in":
            typeStatus = "success";
            labelStatus = "Pemasukan";
            break;
          case "out":
            typeStatus = "cancel";
            labelStatus = "Pengeluaran";
            break;
          default:
            labelStatus = "Pengeluaran";
            typeStatus = "cancel";
        }
        return (
          <Stack gap={1} alignItems={"center"}>
            <Tag variant={typeStatus}>{labelStatus}</Tag>
          </Stack>
        );
      },
      header: "Tipe",
      meta: { align: "center" },
    }),
    {
      id: "action", // using "action" as a unique identifier
      cell: (info: any) => (
        <HStack gap={1} justifyContent="center">
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
    paymentTypeRefetch();
  };

  const { mutate: doDelete } = useDeletePaymentTypeMutation({
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
      paymentTypeRefetch();
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
            Data Jenis Pembayaran
          </Text>
        </HStack>
        <HStack mb={1} gap={{ base: 0, md: 3 }} w="full">
          <ShowData value={pagination?.perPage || 10} />
          <Search placeholder="Search" marginLeft={{ base: "auto" }} maxW={{ base: "120px", md: 72 }} />
        </HStack>
        <DataTable columns={columns} data={dataPaymentTypes?.data.data || []} />
        <Pagination total={dataPaymentTypes?.data.last_page || 0} current={dataPaymentTypes?.data.current_page || 1} />
      </Stack>

      <ModalData
        open={formModal}
        onClose={closeFormModal}
        size="xl"
        title={detailData ? "Form Edit Jenis Pembayaran" : "Form Tambah Jenis Pembayaran"}
      >
        <FormPaymentType id={detailData?.id || undefined} onClose={closeFormModal} />
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

export default PaymentTypePage;
