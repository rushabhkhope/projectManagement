import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import axios from "../../utils/axiosConfig.js";
// import { Button } from "rawasui/dist/Buttons";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const login = () => {
    setLoading(true);
    axios
      .post("auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response?.data?.token);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      <h2 className="text-6xl">Hello Again</h2>
      <p className="pt-2 text-gray-500">
        Welcome back you&apos;ve been missed !
      </p>
      <div className="flex flex-col items-center w-3/4 gap-4 mt-11">
        <TextInput
          type="email"
          placeholder="Email address"
          name="email"
          className="w-full mb-3"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <TextInput
          type="password"
          placeholder="Password"
          name="email"
          className="w-full"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <a className="w-full text-sm text-right" href="#">
          Recover Password
        </a>
        <Button
          color="primary"
          variant="contain"
          onClick={login}
          loading={loading}
        >
          Login
        </Button>
        <Button variant="primary">Primary</Button>{" "}
      </div>
    </>
  );
};

export default Login;
