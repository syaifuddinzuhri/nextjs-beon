import { useHousehoulderQuery } from "@/api/householder";
import { Pagination, Search, ShowData } from "@/components/datatable";
import { DataTable } from "@/components/datatable/Datatable";
import { HouseHolderResponse } from "@/interfaces/householder";
import { useSearchStore } from "@/stores/search";
import { formatDateFullIndonesia } from "@/utils/formatter";
import { HStack, Stack, Tag, Text } from "@chakra-ui/react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import React, { useEffect } from "react";

interface IProps {
  id?: number;
  onClose?: () => void;
}

const HistoryHouseholder = ({ id, onClose }: IProps) => {

  const { search, filter, pagination } = useSearchStore();

  const { data: dataHousehoulders, refetch: househoulderRefetch } = useHousehoulderQuery({
    keyword: search,
    house_id: id,
    page: pagination?.page || 1,
    perPage: pagination?.perPage || 10,
  });

  useEffect(() => {
    if (
      search !== undefined ||
      filter !== undefined ||
      (pagination?.page !== undefined && pagination.perPage !== undefined)
    ) {
      househoulderRefetch();
    }
  }, [househoulderRefetch, search, filter, pagination?.perPage, pagination?.page]);

  const columnHelper = createColumnHelper<HouseHolderResponse>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info: CellContext<HouseHolderResponse, any>) => (
        <Text textAlign={"center"}>
          {((pagination?.page || 1) - 1) * (pagination?.perPage || 10) + info.row.index + 1}
        </Text>
      ),
      header: "#",
      meta: { align: "center" },
    }),
    columnHelper.accessor("resident.name", {
      cell: info => <Text>{info?.row?.original?.resident?.name}</Text>,
      header: "Penghuni",
    }),
    columnHelper.accessor("resident.status", {
      cell: info => {
        let typeStatus: string;
        let labelStatus: string;
        switch (info?.row?.original?.resident?.status) {
          case "permanent":
            typeStatus = "progress";
            labelStatus = "Tetap";
            break;
          case "contract":
            typeStatus = "wait";
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
    columnHelper.accessor("start_date", {
      cell: info => <Text>{info?.row?.original?.start_date && formatDateFullIndonesia(new Date(info?.row?.original?.start_date || ""))}</Text>,
      header: "Tanggal Mulai",
    }),
    columnHelper.accessor("end_date", {
      cell: info => <Text>{info?.row?.original?.end_date && formatDateFullIndonesia(new Date(info?.row?.original?.end_date || ""))}</Text>,
      header: "Tanggal Berakhir",
    }),
  ];

  return (
    <>
      <Stack p={{ base: 2, md: 4 }} background={"white"} borderRadius={12} gap={{ base: 3, md: 5 }} mt={6}>
        <HStack mb={1} gap={{ base: 0, md: 3 }} w="full">
          <ShowData value={pagination?.perPage || 10} />
          <Search placeholder="Search" marginLeft={{ base: "auto" }} maxW={{ base: "120px", md: 72 }} />
        </HStack>
        <DataTable columns={columns} data={dataHousehoulders?.data.data || []} />
        <Pagination total={dataHousehoulders?.data.last_page || 0} current={dataHousehoulders?.data.current_page || 1} />
      </Stack>
    </>
  );
};

export default HistoryHouseholder;
