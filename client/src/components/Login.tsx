import Button from "./Button";
import Input from "./inputs/Input";


const Login = () => {
  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" flex flex-col gap-2 items-center text-gray-300">
          <img src="Logo.png" width={100} height={100} alt="logo" />
          <h1>
           Lorem ipsum dolor sit amet.
          </h1>
        </div>
        <div>
          <Input />
        </div>
        <div>
          <Button></Button>
        </div>
      </div>
    </>
  );
};

export default Login;
