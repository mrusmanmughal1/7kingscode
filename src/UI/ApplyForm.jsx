import { useFormik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { CiEdit, CiPhone } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { ApplyFormSchema } from "../helpers/FormSchema";
import apply from "../assets/images/applyjob.jpg";
import { base_url } from "../helpers/Config";
import { useParams } from "react-router-dom";

const ApplyForm = () => {
  const { id } = useParams();
  const credentials = {
    job_id: id.toString(),
    applicant_name: "",
    applicant_email: "",
    applicant_phone: "",
    description: "",
    applicant_resume: null,
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
      formData.append("job_id", id);
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
      const res = await fetch(`${base_url}/jobs/apply/submit`, {
        method: "POST",
        body: data,
      });

      if (res.status !== "success") {
        const errorData = await res.json();
        console.error("Error:", errorData);
      } else {
        const responseData = await res.json();
        console.log("Success:", responseData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" bg-slate-200 py-20    ">
      <div className="w-[90%] lg:w-[70%] mx-auto flex shadow-2xl">
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
                  name="applicant_name"
                  className="outline-none  w-full bg-slate-100 bottom-0"
                  placeholder="Your Name"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.applicant_name}
                />
              </div>

              <div className="">
                {errors.applicant_name && touched.applicant_name && (
                  <p className="text-start  text-xs font-semibold text-red-600">
                    {errors.applicant_name}
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <div
                className={`${
                  errors.applicant_email && " border-2 border-red-600"
                } border p-4 flex  items-center gap-2 `}
              >
                <p>
                  <AiOutlineMail className="text-2xl text-gray-500" />
                </p>
                <input
                  type="email"
                  id="email"
                  name="applicant_email"
                  className="outline-none  w-full  bg-slate-100 bottom-0"
                  placeholder="Email Address"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.applicant_email}
                />
              </div>

              <div className="">
                {errors.applicant_email && touched.applicant_email && (
                  <p className="text-start  text-xs font-semibold text-red-600">
                    {errors.applicant_email}
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <div
                className={`${
                  errors.applicant_phone && " border-2 border-red-600"
                } border p-4 flex  items-center gap-2 `}
              >
                <p>
                  <CiPhone className="text-2xl text-gray-500" />
                </p>
                <input
                  type="number"
                  id="phone_number"
                  name="applicant_phone"
                  className="outline-none w-full  bg-slate-100  bottom-0"
                  placeholder="Phone Number"
                  aria-required="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.applicant_phone}
                />
              </div>
              {errors.applicant_phone && touched.applicant_phone && (
                <p className="text-start px-1  text-xs font-semibold text-red-600">
                  {errors.applicant_phone}
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
                  errors.applicant_resume && " border-2 border-red-600"
                }   p-4 flex     gap-2 `}
              >
                <input
                  className="outline-none  w-full  bg-slate-100 flex-1 resize-none"
                  type="file"
                  name="applicant_resume"
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setFieldValue(
                      "applicant_resume",
                      event.currentTarget.files[0]
                    );
                  }}
                ></input>
              </div>
              {errors.applicant_resume && touched.applicant_resume && (
                <p className="text-start px-2  text-xs font-semibold text-red-600">
                  {errors.applicant_resume}
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
        <div className="  hidden md:block   ">
          <img className="w-full    " src={apply} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
