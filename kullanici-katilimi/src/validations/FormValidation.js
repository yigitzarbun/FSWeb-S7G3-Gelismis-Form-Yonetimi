import * as Yup from "yup";
export const formSchema = Yup.object().shape({
  name: Yup.string().required("This field must be filled"),
  email: Yup.string().email().required("Enter a valid email address"),
  password: Yup.string()
    .min(5, "Password must be string and its length over 5 characters")
    .required(),
});
