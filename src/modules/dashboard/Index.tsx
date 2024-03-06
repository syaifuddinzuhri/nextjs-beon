import { Stack, useToast } from "@chakra-ui/react";
import type { FC } from "react";

const Dashboard: FC = () => {
  const toast = useToast();
  return (
    <>
      <Stack gap={{ base: 4, md: 5 }}></Stack>
    </>
  );
};

export default Dashboard;
