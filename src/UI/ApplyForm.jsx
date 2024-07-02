import { useFormik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { CiEdit, CiPhone } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { ApplyFormSchema } from "../helpers/FormSchema";
import apply from "../assets/images/applyjob.jpg";

const ApplyForm = () => {
  const credentials = {
    name: "",
    email: "",
    phone_number: "",
    description: "",
    file: "",
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: credentials,
    onSubmit: (values, action) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      sendData(formData);
      action.resetForm();
    },
    validationSchema: ApplyFormSchema,
  });

  const sendData = async (data) => {
    try {
      const res = await fetch(
        "https://339b-103-217-179-73.ngrok-free.app/submit/",
        {
          method: "POST",
          body: data,
          // Do not set Content-Type header; the browser will set it automatically
        }
      );

      if (res.status !== "success") {
        // Handle non-200 responses
        const errorData = await res.json();
        console.error("Error:", errorData);
      } else {
        const responseData = await res.json();
        console.log("Success:", responseData);
        // setFilePath(responseData.filePath);
      }
      s;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" bg-slate-200 py-20    ">
      <div className="w-[70%] mx-auto flex shadow-2xl">
        <div className=" w-full bg-slate-100 p-10  ">
          <div className="capitalize flex flex-col pb-8 text-4xl font-semibold text-blue-secondary  ">
            <p className="w-full">Apply Now</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="">
              <div
                className={`${
                  errors.name && " border-2 border-red-600"
                } border p-4 flex  items-center gap-2  `}
              >
                <p>
                  <SlUser className="text-2xl text-gray-500" />
                </p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="outline-none  w-full bg-slate-100 bottom-0"
                  placeholder="Your Name"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>

              <div className="">
                {errors.name && touched.name && (
                  <p className="text-start  text-xs font-semibold text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <div
                className={`${
                  errors.email && " border-2 border-red-600"
                } border p-4 flex  items-center gap-2 `}
              >
                <p>
                  <AiOutlineMail className="text-2xl text-gray-500" />
                </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="outline-none  w-full  bg-slate-100 bottom-0"
                  placeholder="Email Address"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>

              <div className="">
                {errors.email && touched.email && (
                  <p className="text-start  text-xs font-semibold text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <div
                className={`${
                  errors.phone_number && " border-2 border-red-600"
                } border p-4 flex  items-center gap-2 `}
              >
                <p>
                  <CiPhone className="text-2xl text-gray-500" />
                </p>
                <input
                  type="number"
                  id="phone_number"
                  name="phone_number"
                  className="outline-none w-full  bg-slate-100  bottom-0"
                  placeholder="Phone Number"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone_number}
                />
              </div>
              {errors.phone_number && touched.phone_number && (
                <p className="text-start px-1  text-xs font-semibold text-red-600">
                  {errors.phone_number}
                </p>
              )}
            </div>

            <div className="">
              <div
                className={`${
                  errors.description && " border-2 border-red-600"
                } border p-4 flex     gap-2 `}
              >
                <CiEdit className="text-2xl text-gray-500" />
                <textarea
                  className="outline-none  w-full  bg-slate-100 flex-1 resize-none"
                  rows="2"
                  name="description"
                  placeholder="description"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                ></textarea>
              </div>
              {errors.description && touched.description && (
                <p className="text-start px-2  text-xs font-semibold text-red-600">
                  {errors.description}
                </p>
              )}
            </div>

            <div className="">
              <div
                className={`${
                  errors.file && " border-2 border-red-600"
                }   p-4 flex     gap-2 `}
              >
                <input
                  className="outline-none  w-full  bg-slate-100 flex-1 resize-none"
                  type="file"
                  name="file"
                  placeholder="Description"
                  aria-required="true"
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                ></input>
              </div>
              {errors.file && touched.file && (
                <p className="text-start px-2  text-xs font-semibold text-red-600">
                  {errors.file}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="     ">
          <img className="w-full    " src={apply} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
