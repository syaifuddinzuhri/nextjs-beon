import type { ChakraStylesConfig } from "chakra-react-select";

const chakraStyles: ChakraStylesConfig = {
  dropdownIndicator: provided => ({
    ...provided,
    background: "#FAFBFC",
    border: "none",
    fontSize: "24px",
    paddingX: 0,
    marginX: 0,
  }),
  control: provided => ({
    ...provided,
    background: "#FAFBFC",
    minHeight: "0",
    borderColor: "#EDEFF2",
    padding: "10px 16px",
    fontSize: { base: "12px", md: "14px" },
    lineHeight: { base: "16px", md: "24px" },
  }),
  valueContainer: provided => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: () => ({
    border: "none",
  }),
  menuList: () => ({
    padding: 0,
    borderRadius: "16px",
    boxShadow: "0px 2px 15px 0px rgba(38, 51, 77, 0.15)",
    background: "#fff",
  }),
  option: () => ({
    background: "#fff",
    padding: "12px",
    fontSize: { base: "12px", md: "14px" },
    fontWeight: 500,
    lineHeight: { base: "16px", md: "24px" },
    color: "#334466",
    cursor: "pointer",
    borderRadius: "16px",
  }),
};

export default chakraStyles;
