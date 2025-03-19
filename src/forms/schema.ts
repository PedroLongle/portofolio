import * as yup from "yup";

export const schema = yup.object({
    name: yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    message: yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });
  
export type ContactoFormValues = yup.InferType<typeof schema>;
  