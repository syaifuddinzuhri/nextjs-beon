import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const success = definePartsStyle({
  container: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 700,
    p: "6px 8px",
    w: "fit-content",
    borderRadius: "8px",
    color: "#29CC39",
    bg: "rgba(41, 204, 57, 0.10)",
  },
});

const cancel = definePartsStyle({
  container: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 700,
    p: "6px 8px",
    w: "fit-content",
    borderRadius: "8px",
    color: "#E62E2E",
    bg: "rgba(230, 46, 46, 0.10)",
  },
});

const pending = definePartsStyle({
  container: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 700,
    p: "6px 8px",
    w: "fit-content",
    borderRadius: "8px",
    color: "#D9A200",
    bg: "rgba(255, 203, 51, 0.10)",
  },
});

const process = definePartsStyle({
  container: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 700,
    p: "6px 8px",
    w: "fit-content",
    borderRadius: "8px",
    color: "#33BFFF",
    bg: "rgba(51, 191, 255, 0.10)",
  },
});

const wait = definePartsStyle({
  container: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 700,
    p: "6px 8px",
    w: "fit-content",
    borderRadius: "8px",
    color: "#3361FF",
    bg: "rgba(51, 97, 255, 0.10)",
  },
});

const progress = definePartsStyle({
  container: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 700,
    p: "6px 8px",
    w: "fit-content",
    borderRadius: "8px",
    color: "#CC7429",
    bg: "rgba(204, 116, 41, 0.10)",
  },
});

const partial = definePartsStyle({
  container: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 700,
    p: "6px 8px",
    w: "fit-content",
    borderRadius: "8px",
    color: "#8833FF",
    bg: "rgba(136, 51, 255, 0.10)",
  },
});

const fraud = definePartsStyle({
  container: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 700,
    p: "6px 8px",
    w: "fit-content",
    borderRadius: "8px",
    color: "rgba(0, 0, 0, 0.90)",
    bg: "#E5E5E5",
  },
});

const primary = definePartsStyle({
  container: {
    fontSize: { base: "12px", md: "14px" },
    lineHeight: { base: "20px", md: "24px" },
    fontWeight: 500,
    p: { base: "2px 4px", md: "4px 12px" },
    borderRadius: "16px",
    color: "#FF6633",
    bg: "rgba(255, 102, 51, 0.10)",
  },
});

const black = definePartsStyle({
  container: {
    fontSize: { base: "12px", md: "14px" },
    lineHeight: { base: "20px", md: "24px" },
    fontWeight: 500,
    p: { base: "2px 4px", md: "4px 12px" },
    borderRadius: "16px",
    color: "#00000080",
    bg: "#EDEFF2",
  },
});

const TagConfig = defineMultiStyleConfig({
  variants: {
    success,
    cancel,
    pending,
    process,
    wait,
    progress,
    partial,
    fraud,
    primary,
    black,
  },
});

export default TagConfig;
