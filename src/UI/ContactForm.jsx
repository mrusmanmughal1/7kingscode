/* eslint-disable no-unused-vars */
import {
  AiOutlineExclamationCircle,
  AiOutlineForm,
  AiOutlineMail,
} from "react-icons/ai";
import contact from "../assets/images/contact-main.jpg";
import { GrFormLocation } from "react-icons/gr";
import { FaSquarePhone } from "react-icons/fa6";
import { CiEdit, CiPhone } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { ContactFormSchema } from "../helpers/FormSchema";

const TalkWithUs = () => {
  const credentials = {
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: credentials,
      onSubmit: (values, action) => {
        action.resetForm();
        // console.log(values);
      },
      validationSchema: ContactFormSchema,
    });
  return (
    <div className="lg:py-24 py-16  w-11/12 lg:w-[80%] mx-auto">
      <div className="flex flex-col lg:flex-row  lg:gap-32">
        {/* Content Section */}

        <div className="w-full lg:w-1/2">
          <div className="flex gap-3 items-end mb-6">
            <AiOutlineForm
              className="text-6xl text-blue-secondary"
              aria-hidden="true"
            />
            <p className="text-blue-secondary font-semibold pb-2 text-lg">
              Let’s Talk
            </p>
          </div>
          <div className="text-4xl font-bold mb-6">
            Grow Your Business With Our Expertise
          </div>
          <div className="mb-6">
            <p className="text-gray-500 text-sm leading-7">
              System is a term used to refer to an organized collection of
              symbols and processes that may be used to operate on such symbols.
            </p>
          </div>

          <div className="p-2 flex   lg:text-xs flex-col lg:flex-row">
            <div className=" mb-4 flex-1  border-l-2 p-8 border-gray-600">
              <h3 className="text-xl  font-semibold mb-2">Dubai Office</h3>
              <div className="flex">
                <p className="flex  text-5xl text-gray-700">
                  <GrFormLocation />
                </p>
                <p>516 Pinnacle AlBarsha 1, Arab United Arab</p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <FaSquarePhone />
                </p>
                <p>(+91)9581016898</p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <AiOutlineMail />
                </p>
                <p>info@7kingscode.com</p>
              </div>
            </div>
            <div className="mb-4 p-8  flex-1  border-l-2 pl-8 border-gray-600">
              <h3 className="text-xl font-semibold mb-2">Italy Office</h3>
              <div className="flex">
                <p className="flex items-center text-5xl text-gray-700">
                  <GrFormLocation />
                </p>
                <p>Via Dante Alighieri,5, Pero (MI)- Italy</p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <FaSquarePhone />
                </p>
                <p>(+91)9581016898</p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <AiOutlineMail />
                </p>
                <p>info@7kingscode.com</p>
              </div>
            </div>
          </div>
          <div className="p-2 flex  lg:text-xs flex-col lg:flex-row">
            <div className=" mb-4 flex-1 border-l-2 p-8 border-gray-600">
              <h3 className="text-xl  font-semibold mb-2">Pakistan Office</h3>
              <div className="flex">
                <p className="flex  text-5xl text-gray-700">
                  <GrFormLocation />
                </p>
                <p>Plot # 16 Ex- View Park Phase 8 DHA Lahore Cantt</p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <FaSquarePhone />
                </p>
                <p>(+91)9581016898</p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <AiOutlineMail />
                </p>
                <p>info@7kingscode.com</p>
              </div>
            </div>
            <div className="mb-4 p-8  flex-1 border-l-2 pl-8 border-gray-600">
              <h3 className="text-xl font-semibold mb-2">India Office</h3>
              <div className="flex">
                <p className="flex items-center text-5xl text-gray-700">
                  <GrFormLocation />
                </p>
                <p>
                  9/3rt, Ground Floor, Sri Lakshmi Nilayam, SR Nagar,
                  Hyd-500038.
                </p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <FaSquarePhone />
                </p>
                <p>(+91)9581016898</p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <AiOutlineMail />
                </p>
                <p>info@7kingscode.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="w-full py-24 lg:w-1/2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* <div className="flex flex-col lg:flex-row gap-6">
              <div className="border p-4 w-full flex items-center gap-2 ">
                <p>
                  <SlUser className="     text-gray-500" />
                </p>
                <input
                  type="text"
                  id="name"
                  className="outline-none w-full  bottom-0"
                  placeholder="First Name"
                  aria-required="true"
                  name="first_name"
                />
                {errors.Email && touched.Email && (
                <p className="text-start px-1  text-sm font-semibold text-red-600">
                  {errors.Email}
                </p>
              )}
              </div>
              <div className="border w-full p-4 flex  items-center gap-2 ">
                <p>
                  <SlUser className="text-2xl text-gray-500" />
                </p>
                <input
                  type="text"
                  id="name"
                  name="last_name"
                  className="outline-none  w-full bottom-0"
                  placeholder="Last Name"
                  aria-required="true"
                />
              </div>
            </div> */}
            <div className="">
              <div
                className={`${
                  errors.Email && " border-2 border-red-600"
                } border p-4 flex  items-center gap-2 `}
              >
                <p>
                  <AiOutlineMail className="text-2xl text-gray-500" />
                </p>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  className="outline-none  w-full  bottom-0"
                  placeholder="Email Address"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Email}
                />
              </div>

              <div className="">
                {errors.Email && touched.Email && (
                  <p className="text-start  text-xs font-semibold text-red-600">
                    {errors.Email}
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <div
                className={`${
                  errors.Phone && " border-2 border-red-600"
                } border p-4 flex  items-center gap-2 `}
              >
                <p>
                  <CiPhone className="text-2xl text-gray-500" />
                </p>
                <input
                  type="number"
                  id="Phone"
                  name="Phone"
                  className="outline-none w-full  bottom-0"
                  placeholder="Phone Number"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Phone}
                />
              </div>
              {errors.Phone && touched.Phone && (
                <p className="text-start px-1  text-xs font-semibold text-red-600">
                  {errors.Phone}
                </p>
              )}
            </div>

            <div className="border p-4 flex  items-center gap-2 ">
              <p>
                <SlUser className="text-2xl text-gray-500" />
              </p>
              <input
                type="text"
                name="Company"
                id="name"
                className="outline-none w-full  bottom-0"
                placeholder="Company Name"
                aria-required="true"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Company}
              />
            </div>
            <div className="">
              <div
                className={`${
                  errors.Subject && " border-2 border-red-600"
                } border p-4 flex  items-center gap-2 `}
              >
                <p>
                  <AiOutlineExclamationCircle className="text-2xl text-gray-500" />
                </p>
                <input
                  type="text"
                  id="Subject"
                  name="Subject"
                  className="outline-none w-full  bottom-0"
                  placeholder="Your Subject"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Subject}
                />
              </div>

              {errors.Subject && touched.Subject && (
                <p className="text-start px-1  text-xs font-semibold text-red-600">
                  {errors.Subject}
                </p>
              )}
            </div>
            <div className="">
              <div
                className={`${
                  errors.Message && " border-2 border-red-600"
                } border p-4 flex     gap-2 `}
              >
                <CiEdit className="text-2xl text-gray-500" />
                <textarea
                  className="outline-none  w-full flex-1 resize-none"
                  rows="5"
                  name="Message"
                  placeholder="Write Your Message"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Message}
                ></textarea>
              </div>
              {errors.Message && touched.Message && (
                <p className="text-start px-2  text-xs font-semibold text-red-600">
                  {errors.Message}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TalkWithUs;
