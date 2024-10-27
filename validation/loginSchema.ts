import { string, object } from "yup";

export const loginSchema = object({
  email: string().required("Field is required"),
  password: string().required("Field is required"),
});
