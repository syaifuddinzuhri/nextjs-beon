import type { FlexProps } from "@chakra-ui/react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

import { IconFilter } from "@/assets/index";
import { useSearchStore } from "@/stores/search";

interface IProps extends FlexProps {
  text?: string;
}

const FilterDate: React.FC<IProps> = ({ text = "Sortir", ...rest }) => {
  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");
  const [filter, setFilter] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const { setFilterDate, filterDate } = useSearchStore();

  return (
    <Box {...rest}>
      {isBreakpoint ? (
        <Popover isOpen={filter} onOpen={() => setFilter(true)} onClose={() => setFilter(false)} placement="bottom-end">
          <PopoverTrigger>
            <Button
              variant={"outline"}
              px={4}
              py={2}
              ml={1}
              rightIcon={<IconFilter width="24px" height="24px" color="#FF6633" />}
            >
              {text}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            p={0}
            borderRadius={16}
            boxShadow="0px 2px 10px 0px rgba(38, 51, 77, 0.15)"
            border={"none"}
            textStyle={"p"}
            fontWeight={500}
            width={"fit-content"}
          >
            <HStack
              p={3}
              borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}
              borderTopRadius={16}
              _hover={{ background: "white" }}
              _focus={{ background: "white" }}
              cursor="default"
            >
              <Text fontWeight={700}>{value === "custom" ? "Pilih Tanggal Transaksi" : "Tanggal Update"}</Text>
              {value === "custom" && (
                <Button variant={"outline"} px={2} py={1} fontSize="12px" lineHeight={"20px"} color="blue" ml={"auto"}>
                  Clear
                </Button>
              )}
            </HStack>
            <RadioGroup
              onChange={e => {
                if (e !== "custom") {
                  setFilterDate(undefined, undefined, e);
                }
                setValue(e);
              }}
              value={value}
            >
              <Box borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}>
                <Radio value="7" p={3} borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}>
                  7 Hari Terakhir
                </Radio>
              </Box>
              <Box borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}>
                <Radio value="30" p={3}>
                  30 Hari Terakhir
                </Radio>
              </Box>
              <Box borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}>
                <Radio value="90" p={3}>
                  90 Hari Terakhir
                </Radio>
              </Box>
              <Box borderBottom={"1px solid rgba(0, 0, 0, 0.05)"} borderBottomRadius={value === "custom" ? 0 : 16}>
                <Radio value="custom" p={3}>
                  Custom Tanggal
                </Radio>
                {value === "custom" && (
                  <Stack gap={3} px={2} pb={3} borderTop={"1px solid rgba(0, 0, 0, 0.05)"}>
                    <HStack gap={1} align="end">
                      <Stack gap={2}>
                        <Text>Tanggal Awal</Text>
                        <Input
                          type={"date"}
                          placeholder="22 Sep 2023"
                          py={3}
                          px={4}
                          height="auto"
                          w={130}
                          value={filterDate?.from}
                          onChange={e => setFilterDate(e.target.value, filterDate?.to, undefined)}
                        />
                      </Stack>
                      <Text mb={4}>-</Text>
                      <Stack gap={2}>
                        <Text>Tanggal Akhir</Text>
                        <Input
                          type={"date"}
                          placeholder="25 Sep 2023"
                          py={3}
                          px={4}
                          height="auto"
                          w={130}
                          value={filterDate?.to}
                          onChange={e => setFilterDate(filterDate?.from, e.target.value, undefined)}
                        />
                      </Stack>
                    </HStack>
                    <Button isDisabled py={2} w="full">
                      Terapkan
                    </Button>
                  </Stack>
                )}
              </Box>
            </RadioGroup>
          </PopoverContent>
        </Popover>
      ) : (
        <>
          <Button variant={"outline"} p={1} ml={2} onClick={() => setFilter(true)}>
            <IconFilter width="24px" height="24px" color="#FF6633" />
          </Button>
          <Drawer placement={"bottom"} onClose={() => setFilter(false)} isOpen={filter}>
            <DrawerOverlay />
            <DrawerContent maxHeight={"calc(100vh - 112px)"} borderRadius={"16px 16px 0 0"} pt={4}>
              <DrawerBody p={3} textStyle="h4">
                <HStack p={3} borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}>
                  <Text fontWeight={700}>{value === "custom" ? "Pilih Tanggal Transaksi" : "Tanggal Update"}</Text>
                  {value === "custom" && (
                    <Button
                      variant={"outline"}
                      px={2}
                      py={1}
                      fontSize="12px"
                      lineHeight={"20px"}
                      color="blue"
                      ml={"auto"}
                    >
                      Clear
                    </Button>
                  )}
                </HStack>
                <RadioGroup
                  onChange={e => {
                    if (e !== "custom") {
                      setFilterDate(undefined, undefined, e);
                    }
                    setValue(e);
                  }}
                  value={value}
                >
                  <Box p={3} borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}>
                    <Radio value="7">7 Hari Terakhir</Radio>
                  </Box>
                  <Box p={3} borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}>
                    <Radio value="30">30 Hari Terakhir</Radio>
                  </Box>
                  <Box p={3} borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}>
                    <Radio value="90">90 Hari Terakhir</Radio>
                  </Box>
                  <Box p={3} borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}>
                    <Radio value="custom">Custom Tanggal</Radio>
                  </Box>
                </RadioGroup>
                {value === "custom" && (
                  <Stack gap={3} px={2} pt={2}>
                    <HStack gap={1} align="end" w={"full"}>
                      <Stack gap={2}>
                        <Text>Tanggal Awal</Text>
                        <Input
                          type={"date"}
                          placeholder="22 Sep 2023"
                          py={3}
                          px={4}
                          height="auto"
                          value={filterDate?.from}
                          onChange={e => setFilterDate(e.target.value, filterDate?.to, undefined)}
                        />
                      </Stack>
                      <Text mb={4}>-</Text>
                      <Stack gap={2}>
                        <Text>Tanggal Akhir</Text>
                        <Input
                          type={"date"}
                          placeholder="25 Sep 2023"
                          py={3}
                          px={4}
                          height="auto"
                          value={filterDate?.to}
                          onChange={e => setFilterDate(filterDate?.from, e.target.value, undefined)}
                        />
                      </Stack>
                    </HStack>
                    <Button isDisabled py={2} w="full">
                      Terapkan
                    </Button>
                  </Stack>
                )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default FilterDate;
