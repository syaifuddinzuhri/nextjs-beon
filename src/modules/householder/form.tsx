import { useHouseDetailQuery } from "@/api/house";
import { useAddHouseholderMutation } from "@/api/householder";
import { useResidentDetailQuery, useResidentQuery } from "@/api/resident";
import Loader from "@/components/loader";
import chakraStyles from "@/configs/selectStyleConfig";
import { HouseResponse } from "@/interfaces/house";
import { generateErrorOptions } from "@/utils/common";
import { formatSQLDate } from "@/utils/formatter";
import { Box, Button, FormControl, FormLabel, Input, InputGroup, Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";
import { isEmpty } from "@chakra-ui/utils";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { Select, SelectInstance } from "chakra-react-select";
import { addDays } from "date-fns";
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
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));
  const [status, setStatus] = useState("1");
  const [residentId, setResidentId] = useState<number | null>(null);
  const [residentName, setResidentName] = useState<string>("");
  const [residentStatus, setResidentStatus] = useState("permanent");

  const { data: dataHouseDetail } = useHouseDetailQuery(Number(id) || 0, !isEmpty(id));

  const { data: dataResident, refetch: residentRefetch } = useResidentQuery({
    keyword: search,
    page: 1,
    perPage: 10,
  });

  const {
    data: dataResidentDetail,
    isPending: isLoadingDetailResident,
    refetch: residentDetailRefetch,
  } = useResidentDetailQuery(Number(residentId) || 0, !isEmpty(residentId));

  useEffect(() => {
    if (residentId) {
      residentDetailRefetch();
      setResidentStatus(dataResidentDetail?.data.status || "permanent")
    }
  }, [residentId, dataResidentDetail]);

  useEffect(() => {
    if (id && dataHouseDetail) {
      setLoader(true);
      if (dataHouseDetail.data.active_householder) {
        setStatus(String(dataHouseDetail.data.status) || "1")
        setResidentId(dataHouseDetail.data.active_householder.resident_id);
        setResidentName(dataHouseDetail.data.active_householder.resident?.name || "");
        setSearch(dataHouseDetail.data.active_householder.resident?.name || "");
        setResidentStatus(dataHouseDetail.data.active_householder.resident?.status || "permanent");
        const startDateData = dataHouseDetail?.data?.active_householder?.start_date
          ? new Date(dataHouseDetail.data.active_householder.start_date)
          : new Date();
        setStartDate(startDateData);
        const endDateData = dataHouseDetail?.data?.active_householder?.end_date
          ? new Date(dataHouseDetail.data.active_householder.end_date)
          : addDays(new Date(), 1);
        setEndDate(endDateData);
        residentRefetch();
      }
      setTimeout(() => {
        setLoader(false);
      }, 500);
    }
  }, [id, dataHouseDetail]);

  const { isPending: isLoadingHouseholderAdd, mutate: addHouseholder } = useAddHouseholderMutation({
    status: Number(status),
    house_id: id || 0,
    resident_id: residentId || 0,
    resident_status: residentStatus,
    start_date: formatSQLDate(startDate),
    end_date: formatSQLDate(endDate),
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
    addHouseholder();
  };

  return (
    <>
      <Loader open={loader} onClose={() => setLoader(false)} />
      {!loader && (
        <Stack gap={5} w={"full"}>
          <Stack gap={4} align="center">
            <FormControl>
              <FormLabel>Status</FormLabel>
              <RadioGroup
                value={status}
                onChange={e => {
                  setStatus(e);
                }}
              >
                <Box p={3} display="inline-block">
                  <Radio value="0">Kosong</Radio>
                </Box>
                <Box p={3} display="inline-block">
                  <Radio value="1">Dihuni</Radio>
                </Box>
              </RadioGroup>
            </FormControl>

            {
              status === "1" && (
                <>
                  <FormControl>
                    <FormLabel>Penghuni</FormLabel>
                    <Select
                      id="resident"
                      chakraStyles={chakraStyles}
                      options={dataResident?.data.data.map(x => {
                        return { label: x.name, value: x.id };
                      })}
                      defaultValue={{ label: residentName, value: residentId }}
                      onInputChange={(value) => {
                        setSearch(value);
                        residentRefetch();
                      }}
                      onChange={(e) => {
                        setResidentId(e.value);
                      }}
                      ref={residentComponent}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Status Huni</FormLabel>
                    <RadioGroup
                      value={residentStatus}
                      onChange={e => {
                        setResidentStatus(e);
                      }}
                    >
                      <Box p={3} display="inline-block">
                        <Radio value="permanent">Tetap</Radio>
                      </Box>
                      <Box p={3} display="inline-block">
                        <Radio value="contract">Kontrak</Radio>
                      </Box>
                    </RadioGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Tanggal Mulai</FormLabel>
                    <SingleDatepicker
                      name="date-input"
                      date={startDate}
                      onDateChange={setStartDate}
                    />
                  </FormControl>
                  {
                    residentStatus === "contract" &&
                    <FormControl>
                      <FormLabel>Tanggal Berakhir</FormLabel>
                      <SingleDatepicker
                        name="date-input"
                        date={endDate}
                        onDateChange={setEndDate}
                      />
                    </FormControl>
                  }
                </>
              )
            }

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
