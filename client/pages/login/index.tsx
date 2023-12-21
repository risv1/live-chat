import SignInButton from "@/components/login-section/SignInButton";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 h-96 flex justify-center items-center flex-col rounded-xl w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Sign in to Live Chat</h1>
        </div>
        <SignInButton />
      </div>
    </div>
  );
};

export default LoginPage;
