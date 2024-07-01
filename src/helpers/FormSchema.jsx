import * as Yup from "yup";

export const ContactFormSchema = Yup.object({
  Email: Yup.string().email().required("Please Enter Your Email !"),
  Phone: Yup.string().min(4).max(25).required("Enter Your Phone Number!"),
  Subject: Yup.string().required("Please Subject !"),
  Message: Yup.string().required("Please Enter Your Message !"),
});
export const ApplyFormSchema = Yup.object({
  Name: Yup.string().required("Please Enter Your Name!"),
  Phone: Yup.string().min(4).max(25).required("Enter Your Phone Number!"),
  Email: Yup.string().email().required("Please Enter Your Email !"),
  Description: Yup.string().required("Please Enter Your Message !"),
  cv: Yup.string().required("Please Add Resume !"),
});
