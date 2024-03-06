import { Box, Button, HStack, Progress, Stack, Text } from "@chakra-ui/react";

import { IconCheckCircle } from "@/assets/index";

interface IProps {
  title: string;
  progress: number;
  data: { label: string; value: string }[];
  isCompleted?: boolean;
  onButton?: () => void;
}

const ProgressMultiple: React.FC<IProps> = ({ title, progress, data, isCompleted = false, onButton }) => {
  return (
    <Stack gap={{ base: 1, md: 2 }}>
      <HStack gap={2}>
        <Text textStyle={"p"} fontWeight={700}>
          {title}
        </Text>
      </HStack>
      <Stack gap={3} alignItems="start" flexDirection={{ base: "column", md: "row" }}>
        <Box flex={1} position="relative" w={"full"}>
          <Progress value={progress} size="lg" borderRadius={100} background="#DADEE6" colorScheme="green" />
          <HStack gap={3}>
            {data.map(x => {
              return (
                <Stack
                  width={`calc(100% / ${data.length})`}
                  gap={0}
                  textAlign="center"
                  position={"relative"}
                  mt={2}
                  key={x.value}
                >
                  <Box position={"absolute"} top={"-28px"} left={"calc(50% - 12px)"}>
                    <IconCheckCircle />
                  </Box>
                  <Text textStyle={"small"} fontWeight={500}>
                    {x.label}
                  </Text>
                  <Text textStyle={"small"} fontWeight={500} color={"#33BFFF"}>
                    {x.value}
                  </Text>
                </Stack>
              );
            })}
          </HStack>
        </Box>
        <Button
          px={4}
          py={2}
          border="none"
          variant={"outline"}
          background={progress < 100 ? "rgba(51, 97, 255, 0.10)" : isCompleted ? "rgba(0, 0, 0, 0.10)" : "primary.500"}
          color={progress < 100 ? "#6688FF" : isCompleted ? "rgba(0, 0, 0, 0.20)" : "white"}
          onClick={onButton}
          pointerEvents={isCompleted ? "none" : "auto"}
          width={"fit-content"}
          ml={"auto"}
        >
          {progress < 100 ? "Misi Berjalan" : isCompleted ? "Sudah Diklaim" : "Klaim"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProgressMultiple;
