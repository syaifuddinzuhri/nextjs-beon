import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { isEmpty } from "@chakra-ui/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { useState } from "react";

import { useLoginMutation } from "@/api/auth";
import { ErrorMessage } from "@/components/form";
import { Link } from "@/components/link";
import type { LoginValidation } from "@/interfaces/auth";
import Header from "@/layouts/components/Header";
import { setAccessToken } from "@/utils/auth/helpers";
import { generateValidationErrors } from "@/utils/common";

import { loginValidationSchema } from "./validation";
import { IconEyeCloseOutline, IconEyeOutline, IconPassword, IconUser } from "@/assets/index";

const Login: FC = () => {
  const toast = useToast();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<LoginValidation>();

  const { isPending, mutate: login } = useLoginMutation({
    email,
    password,
    onSuccess: res => {
      const { token } = res.data;
      setAccessToken(token, new Date().toString(), rememberMe);

      toast({
        title: "Login Berhasil",
        status: "success",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      router.push("/");
    },
    onError: (e: any) => {
      const errorMessage = e?.message || "Login Gagal";
      toast({
        title: errorMessage,
        status: "error",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    },
  });

  const doLogin = () => {
    const value = {
      email,
      password,
    };

    setFormErrors(undefined);
    loginValidationSchema
      .validate(value, { abortEarly: false })
      .then(() => login())
      .catch(error => {
        setFormErrors(generateValidationErrors(error.inner));
      });
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    doLogin();
  };

  return (
    <>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        gap={0}
        px={{ base: 3, md: 0 }}
        pb={{ base: 5, md: 0 }}
      >
        <Stack
          p={{ base: "0 0 260px", md: 8 }}
          mx={{ base: -3, md: 0 }}
          flex={1}
          bg={"primary.500"}
          gap={0}
          background={"url('/images/bg-login.jpg') no-repeat, #FF6633"}
          backgroundPosition={{ base: "bottom", md: "center" }}
          backgroundSize={"cover"}
        ></Stack>
        <Stack
          w={"full"}
          p={{ base: 3, md: 8 }}
          flex={1}
          mt={{ base: -20, md: 20 }}
          borderRadius={{ base: 8, md: 0 }}
          background="white"
          gap={0}
        >
          <Text as={"h2"} textStyle={"h3"} mb={{ base: 4, md: 8 }} display="flex" justifyContent="center">
            Login
          </Text>
          <Stack gap={5} w={"full"}>
            <FormControl isInvalid={!isEmpty(formErrors?.email)}>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <IconUser />
                </InputLeftElement>
                <Input
                  type={"email"}
                  placeholder={"Masukkan email anda"}
                  onChange={e => setEmail(e.currentTarget.value)}
                  onKeyDown={handleEnter}
                  pl={12}
                />
              </InputGroup>
              {!isEmpty(formErrors?.email) && <ErrorMessage text={formErrors?.email.message} />}
            </FormControl>
            <FormControl isInvalid={!isEmpty(formErrors?.password)}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <IconPassword />
                </InputLeftElement>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan kata sandi anda"
                  onChange={e => setPassword(e.currentTarget.value)}
                  onKeyDown={handleEnter}
                  pl={12}
                />
                <InputRightElement onClick={() => setShowPassword(!showPassword)} cursor="pointer">
                  {showPassword ? <IconEyeCloseOutline color="#26334D" /> : <IconEyeOutline color="#26334D" />}
                </InputRightElement>
              </InputGroup>
              {!isEmpty(formErrors?.password) && <ErrorMessage text={formErrors?.password.message} />}
            </FormControl>
          </Stack>
          <Stack gap={4} mt={{ base: 4, md: 8 }} align="center">
            <Stack w={"full"} gap={2}>
              <Button w={"full"} onClick={doLogin} isLoading={isPending}>
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
