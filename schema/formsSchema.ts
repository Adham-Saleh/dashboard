import { object, string } from "yup";

export const loginSchema = object({
  email: string().required("Field is required"),
  password: string().required("Field is required"),
});

export const signupSchema = object({
  username: string().required("Field is required"),
  email: string()
    .email("Please enter a valid email")
    .required("Field is required"),
  password: string()
    .required("Field is required")
    .min(8, "Your password is not strong enough. Use at least 8 characters"),
});

export const addUserSchema = object({
  firstname: string().required("Field is required"),
  lastname: string().required("Field is required"),
  email: string().email().required("Field is required"),
  password: string()
    .required("Field is required")
    .min(8, "password must be at least 8 characters"),
  role: string().required("Field is required"),
});
