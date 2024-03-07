import { useAddPaymentTypeMutation, useEditPaymentTypeMutation, usePaymentTypeDetailQuery } from "@/api/payment-type";
import Loader from "@/components/loader";
import { PaymentTypeResponse } from "@/interfaces/payment-type";
import { generateErrorOptions } from "@/utils/common";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { isEmpty } from "@chakra-ui/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface IProps {
  id?: number;
  onClose?: () => void;
}
const FormPaymentType = ({ id, onClose }: IProps) => {
  const toast = useToast();
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [nominal, setNominal] = useState(0);
  const [type, setType] = useState("out");

  const {
    data: dataPaymentTypeDetail,
    isPending: isLoadingDetailPaymentType,
    refetch: paymentTypeDetailRefetch,
  } = usePaymentTypeDetailQuery(Number(id) || 0, !isEmpty(id));

  useEffect(() => {
    if (id && dataPaymentTypeDetail) {
      setLoader(true);
      setName(dataPaymentTypeDetail.data.name);
      setNominal(dataPaymentTypeDetail.data.nominal);
      setType(dataPaymentTypeDetail.data.type);
      setTimeout(() => {
        setLoader(false);
      }, 500);
    }
  }, [id, dataPaymentTypeDetail]);

  const { isPending: isLoadingPaymentType, mutate: addPaymentType } = useAddPaymentTypeMutation({
    name,
    type,
    nominal,
    onSuccess: () => {
      toast({
        title: "Berhasil",
        status: "success",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      if (onClose) {
        onClose();
      }
    },
    onError: (e: any) => toast(generateErrorOptions(e)),
  });

  const { isPending: isLoadingPaymentTypeEdit, mutate: editPaymentType } = useEditPaymentTypeMutation({
    id: Number(id) || 0,
    name,
    type,
    nominal,
    onSuccess: () => {
      toast({
        title: "Berhasil",
        status: "success",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      if (onClose) {
        onClose();
      }
    },
    onError: (e: any) => toast(generateErrorOptions(e)),
  });

  const doSubmit = () => {
    if (id) {
      editPaymentType();
    } else {
      addPaymentType();
    }
  };

  return (
    <>
      <Loader open={loader} onClose={() => setLoader(false)} />
      {!loader && (
        <Stack gap={5} w={"full"}>
          <FormControl>
            <FormLabel>Nama</FormLabel>
            <InputGroup>
              <Input
                type={"text"}
                placeholder={"Masukkan nama"}
                onChange={e => setName(e.currentTarget.value)}
                value={name}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Nominal</FormLabel>
            <InputGroup>
              <Input
                type={"number"}
                placeholder={"Masukkan nominal"}
                onChange={e => setNominal(Number(e.currentTarget.value))}
                value={nominal}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Tipe</FormLabel>
            <RadioGroup
              value={type}
              onChange={e => {
                setType(e);
              }}
            >
              <Box p={3} display="inline-block">
                <Radio value="in">Pemasukan</Radio>
              </Box>
              <Box p={3} display="inline-block">
                <Radio value="out">Pengeluaran</Radio>
              </Box>
            </RadioGroup>
          </FormControl>
          <Stack gap={4} mt={{ base: 4, md: 8 }} align="center">
            <Stack w={"full"} gap={2}>
              <Button w={"full"} onClick={doSubmit} isLoading={isLoadingPaymentType || isLoadingPaymentTypeEdit}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default FormPaymentType;
