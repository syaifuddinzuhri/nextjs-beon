import type { AccordionItemProps } from "@chakra-ui/react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";

interface IProps extends AccordionItemProps {
  data: any[];
}

const FAQComponent: React.FC<IProps> = ({ data, ...rest }) => {
  return (
    <Accordion allowToggle display={"flex"} flexDirection={"column"} gap={{ base: 2, md: 3 }}>
      {data.map(x => {
        return (
          <AccordionItem
            border={"none"}
            borderRadius={8}
            background={"gray.98"}
            key={x.id}
            {...rest}
            _focus={{ borderRadius: 8 }}
          >
            <AccordionButton
              px={{ base: 4, md: 4 }}
              py={{ base: 4, md: 4 }}
              _expanded={{ py: 3 }}
              _hover={{ background: "gray.98" }}
              transition="all 0.3s"
            >
              <Box as="span" flex="1" textAlign="left" color={"gray.10"} textStyle="h4" fontWeight={700}>
                {x.subject}
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pt={1} pb={3}>
              <Text
                textStyle={"p"}
                dangerouslySetInnerHTML={{ __html: x.body }}
                css={{ "> ul, > ol": { paddingLeft: 20 } }}
              />
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQComponent;
