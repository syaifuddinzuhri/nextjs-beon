import { object, ref, string } from "yup";

export const loginValidationSchema = object().shape({
  email: string().required(),
  password: string().min(8).max(32).required(),
});

export const registerValidationSchema = object().shape({
  name: string().required(),
  username: string().required(),
  phone: string().min(8).required(),
  email: string().email().required(),
  password: string().min(8).max(32).required(),
  confirmation_password: string()
    .oneOf([ref("password")], "Passwords must match")
    .required(),
});
