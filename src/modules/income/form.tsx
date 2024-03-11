import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
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
import { useResidentQuery } from "@/api/resident";
import Loader from "@/components/loader";
import { usePaymentTypeDetailQuery, usePaymentTypeQuery } from "@/api/payment-type";
import { currency, getMonthNow, getMonthOptions, getMonthYear, getYearOptions } from "@/utils/formatter";
import { Select, SelectInstance } from "chakra-react-select";
import chakraStyles from "@/configs/selectStyleConfig";
import { useAddPaymentIncomeMutation } from "@/api/payment";
import { generateErrorOptions } from "@/utils/common";

const IncomeForm: FC = () => {
  const toast = useToast();
  const router = useRouter();

  const residentComponent = useRef<SelectInstance<any> | null>(null);
  const paymentTypeComponent = useRef<SelectInstance<any> | null>(null);
  const monthComponent = useRef<SelectInstance<any> | null>(null);
  const yearComponent = useRef<SelectInstance<any> | null>(null);

  const [loader, setLoader] = useState<boolean>(false);
  const [previews, setPreviews] = useState<any>([]);
  const [paymentTypeId, setPaymentTypeId] = useState<number | null>(null);
  const [nominal, setNominal] = useState<number>(0);
  const [residentId, setResidentId] = useState<number | null>(null);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [paymentMethod, setPaymentMethod] = useState("monthly");
  const [searchPaymentType, setSearchPaymentType] = useState("");
  const [searchResident, setSearchResident] = useState("");

  const { data: dataResident, refetch: residentRefetch } = useResidentQuery({
    status: "active",
    keyword: searchResident,
    page: 1,
    perPage: 10,
  });

  const { data: dataPaymentType, refetch: paymentTypeRefetch } = usePaymentTypeQuery({
    keyword: searchPaymentType,
    type: "in",
    page: 1,
    perPage: 10,
  });

  const { isPending: isLoadingPaymentAddIncome, mutate: addPaymentIncome } = useAddPaymentIncomeMutation({
    resident_id: residentId,
    payment_type_id: paymentTypeId,
    nominal: nominal,
    months: previews,
    onSuccess: () => {
      toast({
        title: "Berhasil",
        status: "success",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      router.push("/income");
    },
    onError: (e: any) => toast(generateErrorOptions(e)),
  });

  const doSubmit = () => {
    addPaymentIncome();
  };

  useEffect(() => {
    if (paymentMethod && paymentTypeId && month && year) {
      getPreview();
    }
  }, [paymentMethod, paymentTypeId, month, year])

  const getPreview = () => {
    const monthsPreview = getMonthYear(month, year, paymentMethod === "monthly" ? 1 : 12);
    const monthsWithNominal = monthsPreview.map((monthYear) => {
      return {
        ...monthYear,
        nominal: nominal
      };
    });
    setPreviews(monthsWithNominal);
  }

  return (
    <>
      <Loader open={loader} onClose={() => setLoader(false)} />
      <Button size={"xs"} px={2} variant="outline" onClick={() => router.push("/income")}>
        Kembali
      </Button>
      <Stack p={{ base: 2, md: 4 }} background={"white"} borderRadius={12} gap={{ base: 3, md: 5 }} mt={6}>
        <HStack gap={4}>
          <Text color={"gray.10"} textStyle={{ base: "h3", md: "h4" }} fontWeight={{ base: 700, md: 700 }}>
            Form Pemasukan
          </Text>
        </HStack>
        {!loader && (
          <>
            <Flex gap={5}>
              <Stack gap={5} w={"50%"}>
                <Stack w={"full"} gap={2}>
                  <FormControl>
                    <FormLabel>Penghuni</FormLabel>
                    <Select
                      id="resident"
                      chakraStyles={chakraStyles}
                      options={dataResident?.data.data.map(x => {
                        return { label: x.name, value: x.id };
                      })}
                      onInputChange={(value) => {
                        setSearchResident(value);
                        residentRefetch();
                      }}
                      onChange={(e) => {
                        setResidentId(e.value);
                      }}
                      ref={residentComponent}
                    />
                  </FormControl>
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

                  {
                    month && year && <FormControl>
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
                          <Radio value="yearly">1 Tahun</Radio>
                        </Box>
                      </RadioGroup>
                    </FormControl>
                  }

                  <Button w={"full"} mt={4} onClick={doSubmit} isLoading={isLoadingPaymentAddIncome}>
                    Submit
                  </Button>
                </Stack>
              </Stack>
              {
                paymentTypeId &&
                <Stack gap={5} w={"50%"}>
                  <Stack w={"full"} gap={2}>
                    <FormLabel>Preview Pembayaran</FormLabel>

                    <TableContainer>
                      <Table>
                        <Thead>
                          <Tr>
                            <Th>Bulan</Th>
                            <Th>Tahun</Th>
                            <Th>Nominal</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {previews?.map((item: any, i: number) => (
                            <Tr key={i}>
                              <Td>{item.monthName}</Td>
                              <Td>{item.year}</Td>
                              <Td>{currency(item.nominal)}</Td>
                            </Tr>
                          ))
                          }
                          <Tr fontWeight={"bold"}>
                            <Td colSpan={2} textAlign="right">TOTAL</Td>
                            <Td>
                              {currency(
                                previews.reduce((acc: number, item: any) => acc + item.nominal, 0)
                              )}
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Stack>
              }
            </Flex>
          </>
        )}
      </Stack>
    </>
  );
};

export default IncomeForm;
