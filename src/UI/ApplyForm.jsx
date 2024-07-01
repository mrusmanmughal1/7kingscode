import { useFormik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { CiEdit, CiPhone } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { ApplyFormSchema } from "../helpers/FormSchema";

const ApplyForm = () => {
  const credentials = {
    Name: "",
    Email: "",
    Phone: "",
    Description: "",
    cv: "",
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
      // action.resetForm();
      console.log(values);
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      sendData(formData);
    },
    validationSchema: ApplyFormSchema,
  });

  const sendData = async (data) => {
    try {
      const res = await fetch("http://31.220.22.196:5173", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      //   setFilePath(res.data.filePath);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-[80%] pb-24">
      <div className="w-[50%] mx-auto">
        <div className="capitalize flex flex-col pb-8 text-4xl font-semibold text-blue-secondary pt-12">
          <p className="w-full border- border-black">Apply Now</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="">
            <div
              className={`${
                errors.Name && " border-2 border-red-600"
              } border p-4 flex  items-center gap-2 `}
            >
              <p>
                <SlUser className="text-2xl text-gray-500" />
              </p>
              <input
                type="text"
                id="Name"
                name="Name"
                className="outline-none  w-full  bottom-0"
                placeholder="Your Name"
                aria-required="true"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Name}
              />
            </div>

            <div className="">
              {errors.Name && touched.Name && (
                <p className="text-start  text-xs font-semibold text-red-600">
                  {errors.Name}
                </p>
              )}
            </div>
          </div>
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

          <div className="">
            <div
              className={`${
                errors.Description && " border-2 border-red-600"
              } border p-4 flex     gap-2 `}
            >
              <CiEdit className="text-2xl text-gray-500" />
              <textarea
                className="outline-none  w-full flex-1 resize-none"
                rows="5"
                name="Description"
                placeholder="Description"
                aria-required="true"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Description}
              ></textarea>
            </div>
            {errors.Description && touched.Description && (
              <p className="text-start px-2  text-xs font-semibold text-red-600">
                {errors.Description}
              </p>
            )}
          </div>

          <div className="">
            <div
              className={`${
                errors.cv && " border-2 border-red-600"
              }   p-4 flex     gap-2 `}
            >
              <input
                className="outline-none  w-full flex-1 resize-none"
                type="file"
                name="cv"
                placeholder="Description"
                aria-required="true"
                onBlur={handleBlur}
                onChange={(event) => {
                  setFieldValue("cv", event.currentTarget.files[0]);
                }}
              ></input>
            </div>
            {errors.cv && touched.cv && (
              <p className="text-start px-2  text-xs font-semibold text-red-600">
                {errors.cv}
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
    </div>
  );
};

export default ApplyForm;
