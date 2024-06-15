import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();

  Axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:4000/api/auth/", {
      email,
      password,
    })
      .then((response) => {
        //console.log(response.data);
        if (response.data.status) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 404)
          setMessage("User doesn't exist");
        if (err.response && err.response.status === 400)
          setMessage("Invalid password");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-center">Login</h2>
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              placeholder="email@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* login button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
          <div className="flex justify-between items-center">
            <Link
              to="/forgotpassword"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
            <p className="text-sm">
              Do not have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="text-center mt-4 text-red-500">
            {message && <p>{message}</p>}
          </div>
        </form>
      </div>
    </div>

    // <div className="sign-up-container">
    //   <form action="" className="sign-up-form" onSubmit={handleSubmit}>
    //     <h2>Login</h2>
    //     {/* email */}
    //     <label htmlFor="email">Email :</label>
    //     <input
    //       type="text"
    //       autoComplete="off"
    //       placeholder="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     {/* password */}
    //     <label htmlFor="password">Password :</label>
    //     <input
    //       type="text"
    //       autoComplete="off"
    //       placeholder="******"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     {/* login button */}
    //     <button type="submit">Login</button>
    //     <Link to={"/forgotpassword"}>Forgot password?</Link>
    //     <p>
    //       Do not have an account? <Link to="/signup">Sign Up</Link>
    //     </p>
    //     <div className="message">{message && <p>{message}</p>}</div>
    //   </form>
    // </div>
  );
};

export default Login;
