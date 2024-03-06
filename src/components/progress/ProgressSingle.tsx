import { Box, Button, HStack, Progress, Stack, Text } from "@chakra-ui/react";

import { IconCheckCircle } from "@/assets/index";

interface IProps {
  title: string;
  point: number;
  progress: number;
  isCompleted?: boolean;
  onButton?: () => void;
}

const ProgressSingle: React.FC<IProps> = ({ title, point, progress, isCompleted = false, onButton }) => {
  return (
    <Stack gap={{ base: 1, md: 2 }}>
      <HStack gap={2}>
        <Text textStyle={"p"} fontWeight={700}>
          {title}
        </Text>
        <Text textStyle={"p"} fontWeight={700}>
          |
        </Text>
        <Text textStyle={"p"} color="primary.500" fontWeight={700}>
          {point} Poin
        </Text>
      </HStack>
      <Stack gap={3} flexDirection={{ base: "column", md: "row" }} align={{ base: "none", md: "center" }}>
        <Box flex={1} position="relative">
          <Progress value={progress} size="lg" borderRadius={100} background="#DADEE6" colorScheme="green" />
          <Box position={"absolute"} top={"50%"} transform={"translateY(-50%)"} left={`calc(${progress}% - 20px)`}>
            <IconCheckCircle />
          </Box>
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

export default ProgressSingle;
