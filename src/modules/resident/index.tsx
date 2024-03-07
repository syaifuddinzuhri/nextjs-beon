import { useResidentQuery } from "@/api/resident";
import { IconService, IconUser } from "@/assets/index";
import { Pagination, Search, ShowData } from "@/components/datatable";
import { DataTable } from "@/components/datatable/Datatable";
import { ResidentResponse } from "@/interfaces/resident";
import { useSearchStore } from "@/stores/search";
import { formatDateFullIndonesia, formatSortDateSecond } from "@/utils/formatter";
import { Button, HStack, Icon, Stack, Tag, Text, useMediaQuery, useToast } from "@chakra-ui/react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { useEffect, type FC } from "react";

const Resident: FC = () => {
  const toast = useToast();
  const { search, filter, pagination } = useSearchStore();

  const { data: dataResident, refetch: residentRefetch } = useResidentQuery({
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
      residentRefetch();
    }
  }, [residentRefetch, search, filter, pagination?.perPage, pagination?.page]);

  const columnHelper = createColumnHelper<ResidentResponse>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info: CellContext<ResidentResponse, any>) => <Text textAlign={"center"}>{info.row.index + 1}</Text>,
      header: "#",
      meta: { align: "center" },
    }),
    columnHelper.accessor("name", {
      cell: info => <Text>{info.getValue()}</Text>,
      header: "Nama Lengkap",
    }),
    columnHelper.accessor("phone", {
      cell: info => <Text>{info.getValue()}</Text>,
      header: "Nomor HP",
    }),
    columnHelper.accessor("status", {
      cell: info => {
        let typeStatus: string;
        let labelStatus: string;
        switch (info.getValue()) {
          case 0:
            typeStatus = "cancel";
            labelStatus = "Belum Nikah";
            break;
          case 1:
            typeStatus = "success";
            labelStatus = "Sudah Nikah";
            break;
          default:
            labelStatus = "Belum Nikah";
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
    columnHelper.accessor("created_at", {
      cell: info => formatDateFullIndonesia(new Date(info.getValue())),
      header: "Tanggal Dibuat",
    }),
    {
      id: "action", // using "action" as a unique identifier
      cell: (info: any) => (
        <HStack gap={1} justifyContent="center">
          <Button size={"xs"} px={2}>
            Edit
          </Button>
          <Button size={"xs"} px={2} variant="outline">
            Hapus
          </Button>
        </HStack>
      ),
      header: "Aksi",
      meta: { align: "center" },
    },
  ];

  return (
    <>
      <Button size={"xs"} px={2} variant="outline">
        Tambah Baru
      </Button>
      <Stack p={{ base: 2, md: 4 }} background={"white"} borderRadius={12} gap={{ base: 3, md: 5 }} mt={6}>
        <HStack gap={4}>
          <IconUser width={isBreakpoint ? "32px" : "24px"} height={isBreakpoint ? "32px" : "24px"} color="#FF6633" />
          <Text color={"gray.10"} textStyle={{ base: "h3", md: "h4" }} fontWeight={{ base: 700, md: 700 }}>
            Data Penghuni
          </Text>
        </HStack>
        <HStack mb={1} gap={{ base: 0, md: 3 }} w="full">
          <ShowData value={pagination?.perPage || 10} />
          <Search placeholder="Search" marginLeft={{ base: "auto" }} maxW={{ base: "120px", md: 72 }} />
        </HStack>
        <DataTable columns={columns} data={dataResident?.data.data || []} />
        <Pagination total={dataResident?.data.last_page || 0} current={dataResident?.data.current_page || 1} />
      </Stack>
    </>
  );
};

export default Resident;
