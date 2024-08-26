import { useCallback, useState } from "react";
import SignInForm from "../components/SignInForm";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
function SignInPage() {
  const [toggleSignIn, setToggleSignIn] = useState(true);

  const handleToggleSignIn = useCallback(() => {
    setToggleSignIn((prev) => !prev);
  }, []);

  return (
    <div className="signin-page container-fluid d-flex align-items-center justify-content-center position-relative">
      <div className="back-homepage">
        <Link
          to="/"
          className="text-decoration-none clr-black border px-3 rounded-2 py-2 bg-white"
        >
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </i>
          Home
        </Link>
      </div>
      {toggleSignIn ? (
        <SignInForm setToggleSignIn={handleToggleSignIn} />
      ) : (
        <SignUpForm setToggleSignIn={handleToggleSignIn} />
      )}
    </div>
  );
}

export default SignInPage;
