import * as Yup from "yup";

export const ContactFormSchema = Yup.object({
  Email: Yup.string().email().required("Please Enter Your Email !"),
  Phone: Yup.string().min(4).max(25).required("Enter Your Phone Number!"),
  Subject: Yup.string().required("Please Subject !"),
  Message: Yup.string().required("Please Enter Your Message !"),
});
export const ApplyFormSchema = Yup.object({
  applicant_name: Yup.string().required("Please Enter Your Name!"),
  applicant_phone: Yup.string()
    .min(4)
    .max(25)
    .required("Enter Your Phone Number!"),
  applicant_email: Yup.string().email().required("Please Enter Your Email !"),
  description: Yup.string().required("Please Enter Your Message !"),
  // applicant_resume: .required("Please Add Resume !"),
});

export const LoginSchema = Yup.object({
  username_or_email: Yup.string()
    .min(4)
    .max(25)
    .required("Enter Your User Name or E-mail !"),
  password: Yup.string().required("Please Enter Your Password !"),
});
