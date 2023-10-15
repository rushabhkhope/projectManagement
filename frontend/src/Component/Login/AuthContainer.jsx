import team from "../../assets/images/team.png";
import Login from "./Login";
const AuthContainer = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full p-2 border-2 border-white rounded-md shadow-2xl md:w-1/2 h-2/3 lg:flex">
        <div className="items-center justify-center hidden h-full px-4 rounded-md md:flex bg-secondary">
          <img src={team} />
        </div>
        <div className="flex-1 px-4">
          <span className="block w-full py-6 text-sm text-right">
            Not a member ?{" "}
            <a href="#" className="">
              Register now
            </a>
          </span>

          <div className="flex flex-col items-center justify-center mt-16">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
