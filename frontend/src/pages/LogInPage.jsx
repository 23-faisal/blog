import { SignIn } from "@clerk/clerk-react";

const LogInPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-3rem)]">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LogInPage;
