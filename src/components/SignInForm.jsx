export default function SignInForm({ setToggleSignIn }) {
  return (
    <div className="signin-form px-4 py-4 px-lg-4 py-lg-4 rounded-4 d-flex flex-column align-items-center justify-content-center">
      <div className="logo-wrapper">
        <img
          width="60"
          className="mb-3"
          src="public/images/379634318_6372257832885130_286660119582776002_n-removebg-preview (1).png"
          alt=""
        />
      </div>
      <h2 className="mb-1 ustp-primary">Sign In</h2>
      <p className="text-center text-muted mb-4">
        Sign in and start posting your articles with us
      </p>
      <div className="input-wrapper w-100 mb-3">
        <input
          className="rounded-3"
          type="text"
          placeholder="Username or Email"
        />
      </div>
      <div className="input-wrapper w-100">
        <input className="rounded-3" type="password" placeholder="Password" />
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p className="mb-0 fs-7 text-muted pt-2">Forgot password?</p>
      </div>
      <div className="buttn pt-4 w-100">
        <button className="px-3 py-2 btn btn-warning w-100">Sign In</button>
      </div>

      <div className="d-flex align-items-center mt-4 mb-2">
        <p className="mb-0 text-muted fs-65">
          Don't have an account?{" "}
          <span
            onClick={setToggleSignIn}
            className="ustp-primary cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
