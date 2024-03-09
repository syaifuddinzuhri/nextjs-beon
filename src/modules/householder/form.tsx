import { useResidentQuery } from "@/api/resident";
import Loader from "@/components/loader";
import chakraStyles from "@/configs/selectStyleConfig";
import { Button, FormControl, FormLabel, Stack, useToast } from "@chakra-ui/react";
import { Select, SelectInstance } from "chakra-react-select";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

interface IProps {
  id?: number;
  onClose?: () => void;
}
const FormHouseholder = ({ id, onClose }: IProps) => {
  const toast = useToast();
  const router = useRouter();
  const residentComponent = useRef<SelectInstance<any> | null>(null);

  const [loader, setLoader] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");

  const { data: dataResident, refetch: residentRefetch } = useResidentQuery({
    page: 1,
    perPage: 100,
  });

  // const { data: dataHouseDetail } = useHouseDetailQuery(Number(id) || 0, !isEmpty(id));

  // useEffect(() => {
  //   if (id && dataHouseDetail) {
  //     setLoader(true);
  //     setName(dataHouseDetail.data.name);
  //     setHouseNumber(dataHouseDetail.data.house_number || "");
  //     setTimeout(() => {
  //       setLoader(false);
  //     }, 500);
  //   }
  // }, [id, dataHouseDetail]);

  const doSubmit = () => {
    if (id) {
      // editHouse();
    } else {
      // addHouse();
    }
  };

  return (
    <>
      <Loader open={loader} onClose={() => setLoader(false)} />
      {!loader && (
        <Stack gap={5} w={"full"}>
          <Stack gap={4} mt={{ base: 4, md: 8 }} align="center">
            <FormControl>
              <FormLabel>Penghuni</FormLabel>
              <Select
                id="resident"
                chakraStyles={chakraStyles}
                options={dataResident?.data.data.map(x => {
                  return { label: x.name, value: x.id };
                })}
                onChange={() => {}}
                ref={residentComponent}
              />
            </FormControl>
            <Stack w={"full"} gap={2}>
              <Button w={"full"} onClick={doSubmit} isLoading={false}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default FormHouseholder;
