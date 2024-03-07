import { ErrorMessage } from "@/components/form";
import { ResidentValidation } from "@/interfaces/resident";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { isEmpty } from "@chakra-ui/utils";
import { useRouter } from "next/router";
import { useState, type FC } from "react";
import { residentValidationSchema } from "../auth/validation";
import { generateErrorOptions, generateValidationErrors } from "@/utils/common";
import { useAddResidentMutation } from "@/api/resident";
import { IconEdit } from "@/assets/index";

const ResidentAdd: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("permanent");
  const [isMarried, setIsMarried] = useState("0");
  const [formErrors, setFormErrors] = useState<ResidentValidation>();
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  };

  const { isPending: isLoadingResident, mutate: addResident } = useAddResidentMutation({
    name,
    phone,
    is_married: isMarried,
    id_card_photo: file,
    status,
    onSuccess: () => {
      toast({
        title: "Berhasil",
        status: "success",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      router.push("/resident");
    },
    onError: (e: any) => toast(generateErrorOptions(e)),
  });

  const doSubmit = () => {
    const value = {
      name,
      phone,
      is_married: isMarried,
      status,
      id_card_photo: file,
    };
    setFormErrors(undefined);
    residentValidationSchema
      .validate(value, { abortEarly: false })
      .then(() => addResident())
      .catch(error => {
        setFormErrors(generateValidationErrors(error.inner));
      });
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    doSubmit();
  };

  return (
    <>
      <Button size={"xs"} px={2} variant="outline" onClick={() => router.push("/resident")}>
        Kembali
      </Button>
      <Stack p={{ base: 2, md: 4 }} background={"white"} borderRadius={12} gap={{ base: 3, md: 5 }} mt={6}>
        <HStack gap={4}>
          <Text color={"gray.10"} textStyle={{ base: "h3", md: "h4" }} fontWeight={{ base: 700, md: 700 }}>
            Form Tambah Penghuni
          </Text>
        </HStack>
        <Stack gap={5} w={"50%"}>
          <FormControl isInvalid={!isEmpty(formErrors?.name)}>
            <FormLabel>Nama</FormLabel>
            <InputGroup>
              <Input type={"text"} placeholder={"Masukkan nama"} onChange={e => setName(e.currentTarget.value)} />
            </InputGroup>
            {!isEmpty(formErrors?.name) && <ErrorMessage text={formErrors?.name.message} />}
          </FormControl>
          <FormControl isInvalid={!isEmpty(formErrors?.phone)}>
            <FormLabel>Nomor Hp</FormLabel>
            <InputGroup>
              <Input
                type={"number"}
                placeholder={"Masukkan nomor HP"}
                onChange={e => setPhone(e.currentTarget.value)}
              />
            </InputGroup>
            {!isEmpty(formErrors?.phone) && <ErrorMessage text={formErrors?.phone.message} />}
          </FormControl>
          <FormControl isInvalid={!isEmpty(formErrors?.is_married)}>
            <FormLabel>Status Hubungan</FormLabel>
            <RadioGroup
              value={isMarried.toString()}
              onChange={e => {
                setIsMarried(e);
              }}
            >
              <Box p={3} display="inline-block">
                <Radio value="0">Belum Nikah</Radio>
              </Box>
              <Box p={3} display="inline-block">
                <Radio value="1">Sudah Nikah</Radio>
              </Box>
            </RadioGroup>
            {!isEmpty(formErrors?.is_married) && <ErrorMessage text={formErrors?.is_married.message} />}
          </FormControl>
          <FormControl isInvalid={!isEmpty(formErrors?.status)}>
            <FormLabel>Status Huni</FormLabel>
            <RadioGroup
              value={status}
              onChange={e => {
                setStatus(e);
              }}
            >
              <Box p={3} display="inline-block">
                <Radio value="permanent">Tetap</Radio>
              </Box>
              <Box p={3} display="inline-block">
                <Radio value="contract">Kontrak</Radio>
              </Box>
            </RadioGroup>
            {!isEmpty(formErrors?.status) && <ErrorMessage text={formErrors?.status.message} />}
          </FormControl>
          <FormControl isInvalid={!isEmpty(formErrors?.id_card_photo)}>
            <FormLabel>Foto KTP</FormLabel>
            <Box
              boxShadow={"0px 2px 15px 0px rgba(38, 51, 77, 0.15)"}
              width="fit-content"
              mx="auto"
              position={"relative"}
            >
              <Box bg="white">
                <Image borderRadius="md" width={"250px"} src={previewUrl || "/images/ktp.png"} alt="images" mb={4} />
              </Box>
              <FormLabel
                htmlFor="upload-img"
                bg="white"
                position="absolute"
                right={"10px"}
                bottom={"10px"}
                padding={0.5}
                m={0}
                borderRadius={100}
                cursor="pointer"
              >
                <IconEdit />
              </FormLabel>
              <Input type={"file"} display="none" id="upload-img" onChange={handleFileChange} />
            </Box>

            {!isEmpty(formErrors?.id_card_photo) && <ErrorMessage text={formErrors?.id_card_photo.message} />}
          </FormControl>
          <Stack gap={4} mt={{ base: 4, md: 8 }} align="center">
            <Stack w={"full"} gap={2}>
              <Button w={"full"} onClick={doSubmit} isLoading={isLoadingResident}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ResidentAdd;
