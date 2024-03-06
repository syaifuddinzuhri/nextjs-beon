import { alertAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(alertAnatomy.keys);

const subtle = definePartsStyle({
  container: {
    p: "12px",
    borderRadius: "8px",
  },
});
const AlertConfig = defineMultiStyleConfig({
  variants: {
    subtle,
  },
});

export default AlertConfig;
