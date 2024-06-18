const Login = () => {
  return (
    <div className="grid grid-cols-2 w-1/2 mx-auto gap-y-5 mt-5 ">
      <label htmlFor="">Email</label>
      <input
        className="rounded-md border border-[#D9D9D9] px-3 py-1 outline-none"
        placeholder="Email"
        type="text"
      />

      <label htmlFor="">Password</label>
      <input
        className="rounded-md border border-[#D9D9D9] px-3 py-1 outline-none"
        placeholder="Password"
        type="text"
      />
    </div>
  );
};

export default Login;
