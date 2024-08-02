import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import loginbanner from "../assets/logos/Loginbanner.png";
import AdminHeader from "./../Feature/Admin/AdminHeader";

const LoginForm = ({ paddingMain, width, fontSize }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  //email: admin@7kctech.com
  //password: admin123
  const [error, setError] = useState(null);
  const [fielderror, setFieldError] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const inputEvent = (e) => {
    // const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    setFieldError((prevError) => ({ ...prevError, [e.target.name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://31.220.22.196:8010/jobs/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          "Login failed. Please check your username and password."
        );
      }

      const result = await response.json();
      console.log("Login successful:", result);
      localStorage.setItem("data", result.data.token);
      // Handle successful login, e.g., storing tokens, redirecting
      setData({
        email: "",
        password: "",
      });
      navigate("/admin");
    } catch (error) {
      // Handle error, e.g., displaying error messages
      // console.error("Error during login:", error.message);
      setError(error.message);
      setFieldError({
        email: true,
        password: true,
      });
    }
  };

  return (
    <>
      <AdminHeader />
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
      <div className={`bg-gray-100 h-screen p-8 md:p-14`}>
        <div
          className={`md:mx-auto md:w-1/2 lg:w-1/2 xl:w-1/2 text-center flex flex-col justify-center gap-6`}
        >
          {error && <p className="text-red-600 text-center">{error}</p>}
          <div className="w-[95%] lg:w-[70%] mx-auto shadow-2xl rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="mt-16 flex flex-col gap-6">
                <div>
                  <label className="flex font-semibold px-8">Email</label>
                  <input
                    className={`border p-3 w-[90%] font-bold rounded-md ${
                      fielderror.email ? "border-red-800" : ""
                    }`}
                    placeholder="User Name or Email Address"
                    name="email"
                    id="email"
                    onChange={inputEvent}
                    value={data.email}
                  />
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute right-10 top-10 cursor-pointer">
                      {showPassword ? (
                        <FaEyeSlash onClick={() => setShowPassword(false)} />
                      ) : (
                        <FaEye onClick={() => setShowPassword(true)} />
                      )}
                    </div>
                    <label className="flex font-semibold px-8">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`border p-3 w-[90%] font-bold rounded-md ${
                        fielderror.email ? "border-red-800" : ""
                      }`}
                      placeholder="Password"
                      name="password"
                      id="password"
                      onChange={inputEvent}
                      value={data.password}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-sm px-6 py-4">
                <div className="flex items-center font-semibold gap-2">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
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
