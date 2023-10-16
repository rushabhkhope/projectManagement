import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2 className="text-6xl">Hello...!</h2>
      <p className="pt-2 text-gray-500">Welcome</p>
      <div className="flex flex-col items-center gap-4 mt-11">
        <div className="flex gap-3">
          <TextInput
            type="text"
            placeholder="First Name"
            name="fName"
            className="w-full mb-3"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <TextInput
            type="text"
            placeholder="Last Name"
            name="lName"
            className="w-full"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <TextInput
          type="email"
          placeholder="Email"
          name="lName"
          className="w-full"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <TextInput
          type="password"
          placeholder="Password"
          name="lName"
          className="w-full"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextInput
          type="password"
          placeholder="Confirm password"
          name="lName"
          className="w-full"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button>Register</Button>
      </div>
    </>
  );
};

export default Login;
