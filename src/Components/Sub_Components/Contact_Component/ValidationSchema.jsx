// Yup
import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^[a-z-A-Z][\w]*$/gi, "Invalid Name Format")
    .required("Please enter your name.")
    .min(3, "Name should be at least 3 characters.")
    .max(20, "Name should not exceed 20 characters."),
  mail: Yup.string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  message: Yup.string()
    .trim()
    .min(10, "Your message should be at least 10 characters."),
});
