import { usePaymentQuery } from "@/api/payment";
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

const SpendingPage: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [confirm, setConfirm] = useState<boolean>(false);

  const { search, filter, pagination } = useSearchStore();

  const { data: dataPayments, refetch: paymentRefetch } = usePaymentQuery({
    keyword: search,
    type: "out",
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
      paymentRefetch();
    }
  }, [paymentRefetch, search, filter, pagination?.perPage, pagination?.page]);

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
      cell: info => <Text>{info?.row?.original?.date && formatDateFullIndonesia(new Date(info?.row?.original?.date || ""))}</Text>,
      header: "Tanggal",
    }),
    columnHelper.accessor("month", {
      cell: info => <Text>{info.getValue() ? getMonthName(info.getValue() || 1) : ""} {info?.row?.original?.year}</Text>,
      header: "Bulan/Tahun",
    }),
  ];

  return (
    <>
      <Button
        size={"xs"}
        px={2}
        variant="outline"
        onClick={() => {
          router.push(`/spending/add`)
        }}
      >
        Tambah Pengeluaran
      </Button>
      <Stack p={{ base: 2, md: 4 }} background={"white"} borderRadius={12} gap={{ base: 3, md: 5 }} mt={6}>
        <HStack gap={4}>
          <IconUser width={isBreakpoint ? "32px" : "24px"} height={isBreakpoint ? "32px" : "24px"} color="#FF6633" />
          <Text color={"gray.10"} textStyle={{ base: "h3", md: "h4" }} fontWeight={{ base: 700, md: 700 }}>
            Data Pengeluaran
          </Text>
        </HStack>
        <HStack mb={1} gap={{ base: 0, md: 3 }} w="full">
          <ShowData value={pagination?.perPage || 10} />
          <Search placeholder="Search" marginLeft={{ base: "auto" }} maxW={{ base: "120px", md: 72 }} />
        </HStack>
        <DataTable columns={columns} data={dataPayments?.data.data || []} />
        <Pagination total={dataPayments?.data.last_page || 0} current={dataPayments?.data.current_page || 1} />
      </Stack>
    </>
  );
};

export default SpendingPage;
