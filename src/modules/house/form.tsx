import { useAddHouseMutation, useEditHouseMutation, useHouseDetailQuery } from "@/api/house";
import Loader from "@/components/loader";
import { generateErrorOptions } from "@/utils/common";
import { Button, FormControl, FormLabel, Input, InputGroup, Stack, useToast } from "@chakra-ui/react";
import { isEmpty } from "@chakra-ui/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface IProps {
  id?: number;
  onClose?: () => void;
}
const FormHouse = ({ id, onClose }: IProps) => {
  const toast = useToast();
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");

  const { data: dataHouseDetail } = useHouseDetailQuery(Number(id) || 0, !isEmpty(id));

  useEffect(() => {
    if (id && dataHouseDetail) {
      setLoader(true);
      setName(dataHouseDetail.data.name);
      setHouseNumber(dataHouseDetail.data.house_number || "");
      setTimeout(() => {
        setLoader(false);
      }, 500);
    }
  }, [id, dataHouseDetail]);

  const { isPending: isLoadingHouseAdd, mutate: addHouse } = useAddHouseMutation({
    name,
    house_number: houseNumber,
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

  const { isPending: isLoadingHouseEdit, mutate: editHouse } = useEditHouseMutation({
    id: Number(id) || 0,
    name,
    house_number: houseNumber,
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
      editHouse();
    } else {
      addHouse();
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
            <FormLabel>Nomor Rumah</FormLabel>
            <InputGroup>
              <Input
                type={"text"}
                placeholder={"Masukkan nomor rumah"}
                onChange={e => setHouseNumber(e.currentTarget.value)}
                value={houseNumber}
              />
            </InputGroup>
          </FormControl>
          <Stack gap={4} mt={{ base: 4, md: 8 }} align="center">
            <Stack w={"full"} gap={2}>
              <Button w={"full"} onClick={doSubmit} isLoading={isLoadingHouseAdd || isLoadingHouseEdit}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default FormHouse;
