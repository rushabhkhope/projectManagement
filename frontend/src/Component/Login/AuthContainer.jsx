import { useState } from "react";
import team from "../../assets/images/team.png";
import Login from "./Login";
import Register from "./Register";
const AuthContainer = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full p-2 border-2 border-white rounded-md shadow-2xl md:w-1/2 h-2/3 lg:flex">
        <div className="items-center justify-center hidden h-full px-4 rounded-md lg:flex bg-secondary">
          <img src={team} />
        </div>
        <div className="flex-1 px-4">
          {isLogin ? (
            <span className="block w-full py-6 text-sm text-right">
              Not a member ?{" "}
              <a
                onClick={() => {
                  setLogin(!isLogin);
                }}
                href="#"
                className=""
              >
                Register now
              </a>
            </span>
          ) : (
            <span className="block w-full py-6 text-sm text-right">
              Already have an account ?{" "}
              <a
                onClick={() => {
                  setLogin(!isLogin);
                }}
                href="#"
                className=""
              >
                login
              </a>
            </span>
          )}

          <div className="flex flex-col items-center justify-center mt-16">
            {isLogin ? <Login /> : <Register />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
