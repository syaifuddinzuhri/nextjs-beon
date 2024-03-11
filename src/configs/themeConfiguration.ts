import type { ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import AlertConfig from "./alertStyleConfig";
import colorConfig from "./colorConfig";
import InputConfig from "./inputStyleConfig";
// import RadioTheme from "./radioButtonStyleConfig";
import TagConfig from "./tagStyleConfig";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  colors: {
    primary: {
      200: colorConfig.primaryLighter,
      300: colorConfig.primaryLighter,
      400: colorConfig.primaryLight,
      500: colorConfig.primary,
      600: colorConfig.primaryDark,
      700: colorConfig.primaryDarker,
      800: colorConfig.primaryDarker,
    },
    secondary: {
      100: colorConfig.secondary,
      200: colorConfig.secondary,
      300: colorConfig.secondary,
      400: colorConfig.secondary,
      500: colorConfig.secondary,
      600: colorConfig.secondaryDark,
      700: colorConfig.secondary,
      800: colorConfig.secondary,
      900: colorConfig.secondary,
    },
    gray: {
      10: colorConfig.gray10,
      30: colorConfig.gray30,
      40: colorConfig.gray40,
      80: colorConfig.gray80,
      95: colorConfig.gray95,
      97: colorConfig.gray97,
      98: colorConfig.gray98,
      99: colorConfig.gray99,
    },
    black: "#000000",
    white: "#FFFFFF",
    bgMain: "#FFFFFF",
    red: { 500: colorConfig.red },
    blue: colorConfig.blue,
    blueLight: colorConfig.blueLight,
    green: {
      500: colorConfig.green,
    },
  },
};

type CustomColors = typeof colors;

const theme = extendTheme(
  <ThemeOverride>{
    colors: { ...colors.colors },
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
    lineHeights: {
      xs: "20px",
      sm: "24px",
    },
    textStyles: {
      small: {
        fontSize: { base: "10px", md: "12px" },
        lineHeight: { base: "16px", md: "20px" },
        fontWeight: 400,
        color: colorConfig.gray40,
      },
      p: {
        fontSize: { base: "12px", md: "14px" },
        lineHeight: { base: "20px", md: "24px" },
        fontWeight: 400,
        color: colorConfig.gray40,
      },
      h1: {
        fontSize: { base: "30px", md: "64px" },
        lineHeight: { base: "50px", md: "90px" },
        fontWeight: 700,
        color: colorConfig.gray10,
      },
      h2: {
        fontSize: { base: "18px", md: "30px" },
        lineHeight: { base: "30px", md: "40px" },
        fontWeight: 700,
        color: colorConfig.gray10,
      },
      h3: {
        fontSize: { base: "16px", md: "24px" },
        lineHeight: { base: "24px", md: "30px" },
        fontWeight: 700,
        color: colorConfig.gray10,
      },
      h4: {
        fontSize: { base: "14px", md: "16px" },
        lineHeight: "24px",
        fontWeight: 400,
        color: colorConfig.gray40,
      },
    },
    components: {
      MonthPicker: {
        baseStyle: {
          border: "1px solid #ccc",
          borderRadius: "md",
          boxShadow: "md",
          padding: "2",
          maxWidth: "200px", // Adjust as needed
          bg: "white", // Background color
          fontFamily: "inherit" // Use the same font as Chakra UI
        },
        parts: ['picker', 'month', 'today'],
        variants: {
          default: {
            picker: {
              width: "100%",
              bg: "white", // Background color
              border: "none"
            },
            month: {
              cursor: "pointer",
              color: "#333" // Month text color
            },
            today: {
              borderRadius: "50%",
              border: "1px solid #3182ce" // Today border color
            }
          }
        }
      },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
          fontWeight: 700,
        },
      },
      PinInput: {
        baseStyle: {
          fontWeight: "bold",
        },
        sizes: {
          lg: {
            w: 16,
            h: 16,
          },
        },
      },
      Button: {
        baseStyle: {
          borderRadius: "8px",
          _disabled: {
            background: "rgba(255, 102, 51, 0.20)",
            color: "rgba(255, 102, 51, 0.5)",
            opacity: 1,
          },
          _hover: {
            _disabled: {
              background: "rgba(255, 102, 51, 0.20)",
              color: "rgba(255, 102, 51, 0.5)",
              opacity: 1,
            },
          },
        },
        sizes: {
          xs: {
            fontSize: "12px",
            lineHeight: "24px",
            fontWeight: 700,
            height: "auto",
            px: 2,
            py: 1,
          },
          sm: {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 700,
            height: "auto",
            px: 8,
            py: 3,
          },
          xl: {
            fontSize: 24,
            py: 3,
            px: 4,
          },
        },
        defaultProps: {
          size: "sm",
        },
      },
      Table: {
        parts: ["tr"],
        baseStyle: {
          borderColor: "#EDEDED",
          tr: {
            borderColor: "#EDEDED",
            borderLeft: "1px",
            borderTop: "1px",
            borderRight: "1px",
          },
          th: {
            borderColor: "#EDEDED",
            borderLeft: "1px",
            borderTop: "1px",
            borderRight: "1px",
          },
          td: {
            borderColor: "#EDEDED",
            borderLeft: "1px",
            borderTop: "1px",
            borderRight: "1px",
          },
        },
      },
      Textarea: {
        baseStyle: {
          padding: 2,
          fontSize: "14px",
          lineHeight: "24px",
          color: "#334466",
          fontWeight: 400,
          borderRadius: 8,
        },
        variants: {
          default: {
            border: "1px solid #EDEFF2",
            background: "#FAFBFC",
          },
        },
        defaultProps: {
          variant: "default",
        },
      },
      Input: InputConfig,
      // Select: SelectConfig,
      Tag: TagConfig,
      Alert: AlertConfig,
      Tabs: {
        sizes: {
          md: {
            tablist: {
              color: "#7D8FB3",
              justifyContent: { base: "center", md: "start" },
            },
            tab: {
              padding: 0,
              fontSize: { base: "14px", md: "16px" },
              lineHeight: "24px",
              fontWeight: 700,
              _focus: {
                bg: "transparent",
              },
              _selected: {
                color: "blue",
                borderBottom: "2px solid #3361FF",
              },
            },
            tabpanel: {
              padding: "20px 0 0",
            },
          },
        },
      },
      // Radio: RadioTheme,

    },
    config,
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);
type CustomTheme = typeof theme & CustomColors;
export type { CustomTheme };
export { theme };
