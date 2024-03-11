import { usePaymentQuery } from "@/api/payment";
import { useReportQuery } from "@/api/report";
import { IconUser } from "@/assets/index";
import { Pagination, Search, ShowData } from "@/components/datatable";
import { DataTable } from "@/components/datatable/Datatable";
import { PaymentResponse } from "@/interfaces/payment";
import { useSearchStore } from "@/stores/search";
import { currency, formatDateFullIndonesia, getMonthName } from "@/utils/formatter";
import { Button, Flex, HStack, Stack, Tag, Text, useMediaQuery, useToast } from "@chakra-ui/react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import { useEffect, useState, type FC } from "react";

interface IProps {
  month?: number;
  year?: number;
}

const SpendingReport = ({ month, year }: IProps) => {
  const { search, filter, pagination } = useSearchStore();
  const { data: dataPayments, refetch: paymentRefetch } = useReportQuery({
    keyword: search,
    type: "out",
    month,
    year,
    page: pagination?.page || 1,
    perPage: pagination?.perPage || 10,
  });

  useEffect(() => {
    if (
      search !== undefined ||
      month !== undefined ||
      year !== undefined ||
      filter !== undefined ||
      (pagination?.page !== undefined && pagination.perPage !== undefined)
    ) {
      paymentRefetch();
    }
  }, [paymentRefetch, search, filter, pagination?.perPage, pagination?.page, month, year]);

  const columnHelper = createColumnHelper<PaymentResponse>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info: CellContext<PaymentResponse, any>) => (
        <Text textAlign={"center"}>
          {((pagination?.page || 1) - 1) * (pagination?.perPage || 10) + info.row.index + 1}
        </Text>
      ),
      header: "#",
      meta: { align: "center" },
    }),
    columnHelper.accessor("payment_type.name", {
      cell: info => <Text>{info?.row?.original?.payment_type?.name}</Text>,
      header: "Jenis Pembayaran",
    }),
    columnHelper.accessor("nominal", {
      cell: info => <Text>{currency(Number(info.getValue()))}</Text>,
      header: "Nominal",
    }),
    columnHelper.accessor("date", {
      cell: info => <Text>{!info?.row?.original?.month && !info?.row?.original?.year && info?.row?.original?.date && formatDateFullIndonesia(new Date(info?.row?.original?.date || ""))}</Text>,
      header: "Tanggal",
    }),
    columnHelper.accessor("month", {
      cell: info => <Text>{info.getValue() ? getMonthName(info.getValue() || 1, false) : ""} {info?.row?.original?.year}</Text>,
      header: "Bulan/Tahun",
    })
  ];

  return (
    <>
      <HStack mb={1} gap={{ base: 0, md: 3 }} w="full">
        <ShowData value={pagination?.perPage || 10} />
        <Search placeholder="Search" marginLeft={{ base: "auto" }} maxW={{ base: "120px", md: 72 }} />
      </HStack>
      <DataTable columns={columns} data={dataPayments?.data.datas.data || []} />
      <Pagination total={dataPayments?.data.datas.last_page || 0} current={dataPayments?.data.datas.current_page || 1} />
    </>
  );
};

export default SpendingReport;
