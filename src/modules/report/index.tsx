import { usePaymentQuery } from "@/api/payment";
import { IconUser } from "@/assets/index";
import { Pagination, Search, ShowData } from "@/components/datatable";
import { DataTable } from "@/components/datatable/Datatable";
import { PaymentResponse } from "@/interfaces/payment";
import { useSearchStore } from "@/stores/search";
import { currency, getMonthName, getMonthNow, getMonthOptions, getYearOptions } from "@/utils/formatter";
import { Button, Flex, FormControl, FormLabel, HStack, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useMediaQuery, useToast } from "@chakra-ui/react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import { useEffect, type FC, useRef, useState } from "react";
import IncomeReport from "./income-report";
import SpendingReport from "./spending-report";
import { Select, SelectInstance } from "chakra-react-select";
import chakraStyles from "@/configs/selectStyleConfig";

const ReportPage: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");
  const monthComponent = useRef<SelectInstance<any> | null>(null);
  const yearComponent = useRef<SelectInstance<any> | null>(null);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());

  return (
    <>
      <Stack p={{ base: 2, md: 4 }} background={"white"} borderRadius={12} gap={{ base: 3, md: 5 }} mt={6}>
        <HStack gap={4}>
          <IconUser width={isBreakpoint ? "32px" : "24px"} height={isBreakpoint ? "32px" : "24px"} color="#FF6633" />
          <Text color={"gray.10"} textStyle={{ base: "h3", md: "h4" }} fontWeight={{ base: 700, md: 700 }}>
            Data Laporan
          </Text>
        </HStack>
        <Flex gap={5} mt={3}>
          <FormControl>
            <FormLabel>Bulan</FormLabel>
            <Select
              chakraStyles={chakraStyles}
              options={getMonthOptions()}
              defaultValue={getMonthNow(month)}
              ref={monthComponent}
              onChange={(e) => {
                setMonth(e.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Tahun</FormLabel>
            <Select
              onChange={(e) => {
                setYear(e.value);
              }}
              defaultValue={{
                label: year,
                value: year
              }}
              chakraStyles={chakraStyles}
              options={getYearOptions()}
              ref={yearComponent}
            />
          </FormControl>
        </Flex>
        <Tabs isFitted variant='enclosed' mt={5}>
          <TabList>
            <Tab py={2}>Pemasukan</Tab>
            <Tab py={2}>Pengeluaran</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <IncomeReport month={month} year={year} />
            </TabPanel>
            <TabPanel>
              <SpendingReport month={month} year={year} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
};

export default ReportPage;
