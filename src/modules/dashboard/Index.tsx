import { FormControl, FormLabel, HStack, Stack, Text, useToast } from "@chakra-ui/react";
import { useState, type FC, useEffect, useRef } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useReportSummaryQuery } from "@/api/report";
import { SummaryResponse } from "@/interfaces/report";
import { getMonthName, getYearOptions } from "@/utils/formatter";
import { Select, SelectInstance } from "chakra-react-select";
import chakraStyles from "@/configs/selectStyleConfig";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: FC = () => {
  const toast = useToast();
  const [year, setYear] = useState(new Date().getFullYear());
  const [chartData, setChartData] = useState<any>(null);
  const yearComponent = useRef<SelectInstance<any> | null>(null);

  const { data: dataSummary, refetch: summaryRefetech } = useReportSummaryQuery({
    year,
  });

  useEffect(() => {
    const labels = dataSummary?.data.datas.map((item: any) => getMonthName(item.month - 1));
    const datasets = [
      {
        label: 'Total Pemasukan',
        data: dataSummary?.data.datas.map((item: any) => item.total_in),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Total Pengeluaran',
        data: dataSummary?.data.datas.map((item: any) => item.total_out),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Sisa Saldo',
        data: dataSummary?.data.datas.map((item: any) => item.difference),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ];
    setChartData({ labels, datasets });
  }, [dataSummary]);

  useEffect(() => {
    summaryRefetech();
  }, [year])


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Laporan Tahun ' + year,
      },
    },
  };

  return (
    <>
      <Stack p={{ base: 2, md: 4 }} background={"white"} borderRadius={12} gap={{ base: 3, md: 5 }}>
        <HStack gap={4}>
          <Text color={"gray.10"} textStyle={{ base: "h3", md: "h4" }} fontWeight={{ base: 700, md: 700 }}>
            Laporan Pemasukan dan Pengeluaran
          </Text>
        </HStack>

        <FormControl>
          <FormLabel>Pilih Tahun</FormLabel>
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

        {
          chartData &&
          <Bar options={options} data={chartData} />
        }
      </Stack>
    </>
  );
};

export default Dashboard;
