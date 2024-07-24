import { useFormik } from "formik";
import { LoginSchema } from "../helpers/FormSchema";
import { NavLink } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import loginbanner from "../assets/logos/Loginbanner.png";

const credentials = {
  username_or_email: "",
  password: "",
};

const LoginForm = ({ paddingMain, width, fontSize }) => {
  const [showPassword, setshowPassword] = useState(false);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: credentials,
      onSubmit: (values, actions) => {
        // Add your login logic here
        console.log(values);
        actions.resetForm();
      },
      validationSchema: LoginSchema,
    });

  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[150px]"
          src={loginbanner}
          alt="Login banner"
        />
        <p className="absolute top-16 text-3xl font-bold text-white left-[50%] translate-x-[-50%]">
          LOGIN
        </p>
      </div>
      <div className={`bg-white h-screen p-10 md:p-14`}>
        <div
          className={`md:mx-auto md:w-1/2 lg:w-1/2 xl:w-1/2 text-center flex flex-col justify-center gap-6`}
        >
          <div className="w-[95%] lg:w-[70%] mx-auto shadow-2xl rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="mt-16 flex flex-col gap-6">
                <div>
                  <label className="flex font-semibold px-8">Email</label>
                  <input
                    className="border p-3 w-[90%] font-bold rounded-md"
                    placeholder="User Name or Email Address"
                    name="username_or_email"
                    id="username_or_email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username_or_email}
                  />
                  {errors.username_or_email && touched.username_or_email && (
                    <p className="text-start px-1 text-sm font-semibold text-red-600">
                      {errors.username_or_email}
                    </p>
                  )}
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute right-10 top-10 cursor-pointer">
                      {showPassword ? (
                        <FaEyeSlash onClick={() => setshowPassword(false)} />
                      ) : (
                        <FaEye onClick={() => setshowPassword(true)} />
                      )}
                    </div>
                    <label className="flex font-semibold px-8">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="border p-3 w-[90%] rounded-md font-bold"
                      placeholder="Password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </div>
                  {errors.password && touched.password && (
                    <p className="text-start px-1 text-sm font-semibold text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between text-sm px-6 py-4">
                <div className="flex items-center font-semibold gap-2">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <div className="font-semibold">
                  <NavLink
                    to="/forget-password"
                    className="hover:text-btn-primary"
                  >
                    Forget Password?
                  </NavLink>
                </div>
              </div>
              <div className="w-[90%] mx-auto mb-16">
                <button
                  type="submit"
                  className="font-bold bg-blue-secondary text-white border-btn-primary border-2 px-10 w-full rounded-md py-2"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
