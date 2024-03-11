import { ResidentValidation } from "@/interfaces/resident";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { isEmpty } from "@chakra-ui/utils";
import { useRouter } from "next/router";
import { useEffect, useState, type FC, useRef } from "react";
import { generateErrorOptions } from "@/utils/common";
import { useAddResidentMutation, useResidentDetailQuery, useResidentQuery } from "@/api/resident";
import Loader from "@/components/loader";
import { usePaymentTypeDetailQuery, usePaymentTypeQuery } from "@/api/payment-type";
import { formatSQLDate, getMonthNow, getMonthOptions, getMonthYear, getYearOptions } from "@/utils/formatter";
import { Select, SelectInstance } from "chakra-react-select";
import chakraStyles from "@/configs/selectStyleConfig";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { Span } from "next/dist/trace";
import { useAddPaymentSpendingMutation } from "@/api/payment";
const SpendingForm: FC = () => {
  const toast = useToast();
  const router = useRouter();

  const paymentTypeComponent = useRef<SelectInstance<any> | null>(null);
  const monthComponent = useRef<SelectInstance<any> | null>(null);
  const yearComponent = useRef<SelectInstance<any> | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("monthly");

  const [loader, setLoader] = useState<boolean>(false);
  const [paymentTypeId, setPaymentTypeId] = useState<number | null>(null);
  const [date, setDate] = useState(new Date());
  const [searchPaymentType, setSearchPaymentType] = useState("");
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [nominal, setNominal] = useState<number>(0);

  const { data: dataPaymentType, refetch: paymentTypeRefetch } = usePaymentTypeQuery({
    keyword: searchPaymentType,
    type: "out",
    page: 1,
    perPage: 10,
  });

  const { isPending: isLoadingPaymentAddSpending, mutate: addPaymentSpending } = useAddPaymentSpendingMutation({
    payment_type_id: paymentTypeId,
    nominal: nominal,
    date: formatSQLDate(date),
    month,
    year,
    type: paymentMethod,
    onSuccess: () => {
      toast({
        title: "Berhasil",
        status: "success",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      router.push("/spending");
    },
    onError: (e: any) => toast(generateErrorOptions(e)),
  });

  const doSubmit = () => {
    addPaymentSpending();
  };

  return (
    <>
      <Loader open={loader} onClose={() => setLoader(false)} />
      <Button size={"xs"} px={2} variant="outline" onClick={() => router.push("/payment")}>
        Kembali
      </Button>
      <Stack p={{ base: 2, md: 4 }} background={"white"} borderRadius={12} gap={{ base: 3, md: 5 }} mt={6}>
        <HStack gap={4}>
          <Text color={"gray.10"} textStyle={{ base: "h3", md: "h4" }} fontWeight={{ base: 700, md: 700 }}>
            Form Pengeluaran
          </Text>
        </HStack>
        {!loader && (
          <>
            <Flex gap={5}>
              <Stack gap={5} w={"50%"}>
                <Stack w={"full"} gap={2}>

                  <FormControl>
                    <FormLabel>Jenis Pembayaran</FormLabel>
                    <Select
                      chakraStyles={chakraStyles}
                      options={dataPaymentType?.data.data.map(x => {
                        return { label: x.name, value: x.id, nominal: x.nominal };
                      })}
                      onInputChange={(value) => {
                        setSearchPaymentType(value);
                        paymentTypeRefetch();
                      }}
                      onChange={(e) => {
                        setPaymentTypeId(e.value);
                        setNominal(e.nominal);
                      }}
                      ref={paymentTypeComponent}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Metode Pembayaran</FormLabel>
                    <RadioGroup
                      value={paymentMethod}
                      onChange={e => {
                        setPaymentMethod(e);
                      }}
                    >
                      <Box p={3} display="inline-block">
                        <Radio value="monthly">Bulanan</Radio>
                      </Box>
                      <Box p={3} display="inline-block">
                        <Radio value="free">Bebas</Radio>
                      </Box>
                    </RadioGroup>
                  </FormControl>
                  {
                    paymentMethod === "free" && <FormControl>
                      <FormLabel>Tanggal</FormLabel>
                      <SingleDatepicker
                        name="date-input"
                        date={date}
                        onDateChange={setDate}
                      />
                    </FormControl>
                  }
                  {
                    paymentMethod === "monthly" &&
                    <Flex gap={5}>
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
                  }

                  <FormControl >
                    <FormLabel>Nominal</FormLabel>
                    <InputGroup>
                      <Input
                        type={"number"}
                        placeholder={"Masukkan nominal"}
                        onChange={e => setNominal(Number(e.currentTarget.value))}
                        value={nominal}
                      />
                    </InputGroup>
                    <Text color={"red"} fontSize={"xs"}>*Nominal secara default berdasarkan data jenis pembayaran atau bisa diisi manual</Text>
                  </FormControl>
                  <Button w={"full"} mt={4} onClick={doSubmit} isLoading={isLoadingPaymentAddSpending}>
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </>
        )}
      </Stack >
    </>
  );
};

export default SpendingForm;
