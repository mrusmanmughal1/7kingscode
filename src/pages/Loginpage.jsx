import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import loginbanner from "../assets/logos/Loginbanner.png";
import AdminHeader from "./../Feature/Admin/AdminHeader";

//email: admin@7kctech.com
//password: admin123

const LoginForm = ({ paddingMain, width, fontSize }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [fielderror, setFieldError] = useState({
    email: false,
    password: false,
  });
  // New state for success message
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const inputEvent = (e) => {
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
        throw new Error("Login failed!");
      }

      const result = await response.json();
      localStorage.setItem("data", result.data.token);
      setData({
        email: "",
        password: "",
      });
      setSuccessMessage("Login successfully!");
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } catch (error) {
      setError(error.message);
      setFieldError({
        email: true,
        password: true,
      });
    }
  };

  return (
    <>
      {error && (
        <p className=" w-48 flex justify-center items-center mx-auto text-white p-3 rounded-md mb-4 bg-red-600">
          {error}
        </p>
      )}
      {successMessage && (
        <div className="bg-green-500 w-48 flex justify-center items-center mx-auto text-white p-3 rounded-md mb-4">
          {successMessage}
        </div>
      )}
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

      <div className="bg-gray-100 h-screen p-8 md:p-14">
        <div className="md:mx-auto md:w-1/2 lg:w-1/2 xl:w-1/2 text-center flex flex-col justify-center gap-6">
          <div className="w-[95%] lg:w-[70%] mx-auto shadow-2xl rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-6">
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
                        fielderror.password ? "border-red-800" : ""
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
