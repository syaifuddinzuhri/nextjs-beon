import type { FlexProps } from "@chakra-ui/react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

import { IconFilter } from "@/assets/index";
import { useSearchStore } from "@/stores/search";

interface IProps extends FlexProps {
  data: any[];
  text?: string;
  responsiveText?: boolean;
}

const Filter: React.FC<IProps> = ({ data, text = "Filter", responsiveText = false, ...rest }) => {
  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");
  const [filter, setFilter] = useState<boolean>(false);

  const setFilterData = useSearchStore(state => state.setFilter);

  return (
    <Box {...rest}>
      {isBreakpoint ? (
        <Menu>
          <MenuButton
            as={Button}
            variant={"outline"}
            px={4}
            py={2}
            rightIcon={<IconFilter width="24px" height="24px" color="#FF6633" />}
          >
            {text}
          </MenuButton>

          <MenuList
            p={0}
            borderRadius={16}
            boxShadow="0px 2px 10px 0px rgba(38, 51, 77, 0.15)"
            border={"none"}
            textStyle="p"
            fontWeight={500}
          >
            {data.map((x, index) => {
              return (
                <MenuItem
                  p={3}
                  key={x.value}
                  borderBottom={data.length === index + 1 ? "none" : "1px solid rgba(0, 0, 0, 0.05)"}
                  borderBottomRadius={data.length === index + 1 ? 16 : 0}
                  borderTopRadius={index === 0 ? 16 : 0}
                  onClick={() => setFilterData(x.label, x.value)}
                >
                  {x.label}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      ) : (
        <>
          {responsiveText ? (
            <Button
              variant={"outline"}
              px={4}
              py={2}
              rightIcon={<IconFilter width="24px" height="24px" color="#FF6633" />}
              onClick={() => setFilter(true)}
            >
              {text}
            </Button>
          ) : (
            <Button variant={"outline"} p={1} order={{ base: 4, md: 4 }} onClick={() => setFilter(true)}>
              <IconFilter width="24px" height="24px" color="#FF6633" />
            </Button>
          )}
          <Drawer placement={"bottom"} onClose={() => setFilter(false)} isOpen={filter}>
            <DrawerOverlay />
            <DrawerContent maxHeight={"calc(100vh - 112px)"} borderRadius={"16px 16px 0 0"} pt={4}>
              <DrawerBody p={0}>
                {data.map((x, index) => {
                  return (
                    <Box
                      p={3}
                      key={x.value}
                      borderBottom={data.length === index + 1 ? "none" : "1px solid rgba(0, 0, 0, 0.05)"}
                      onClick={() => {
                        setFilter(false);
                        setFilterData(x.label, x.value);
                      }}
                      textStyle="h4"
                    >
                      {x.label}
                    </Box>
                  );
                })}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default Filter;
