import * as Yup from "yup";

export const ContactFormSchema = Yup.object({
  Email: Yup.string().email().required("Please Enter Your Email !"),
  Phone: Yup.string().min(4).max(25).required("Enter Your Phone Number!"),
  Subject: Yup.string().required("Please Subject !"),
  Message: Yup.string().required("Please Enter Your Message !"),
});
export const ApplyFormSchema = Yup.object({
  name: Yup.string().required("Please Enter Your Name!"),
  phone_number: Yup.string()
    .min(4)
    .max(25)
    .required("Enter Your Phone Number!"),
  email: Yup.string().email().required("Please Enter Your Email !"),
  description: Yup.string().required("Please Enter Your Message !"),
  // file: .required("Please Add Resume !"),
});
