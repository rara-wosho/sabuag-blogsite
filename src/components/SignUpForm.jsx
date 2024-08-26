import { useState } from "react";
import StepsControls from "./StepsControls";

export default function SignUpForm({ setToggleSignIn }) {
  const [activeStep, setActiveStep] = useState(1);
  const total_step = 4;
  return (
    <div className="signin-form px-3 py-4 px-lg-4 py-lg-4 rounded-4 d-flex flex-column align-items-center justify-content-center">
      <div className="logo-wrapper">
        <img
          width="60"
          className="mb-3"
          src="public/images/379634318_6372257832885130_286660119582776002_n-removebg-preview (1).png"
          alt=""
        />
      </div>
      <h2 className="mb-1 ustp-primary">Sign Up</h2>
      {/* <p className="text-center text-muted mb-4">
        Sign Up and start posting your articles with us
      </p> */}
      <div className="row w-100 mb-3">
        <p className="mb-2 text-muted d-inline-block">Personal Information</p>
        <div className="px-1 col-12 col-lg-6">
          <div className="input-wrapper w-100 mb-2">
            <input
              className="rounded-3 py-2"
              type="text"
              placeholder="first name"
            />
          </div>
        </div>
        <div className="px-1 col-12 col-lg-6">
          <div className="input-wrapper w-100 mb-2">
            <input
              className="rounded-3 py-2"
              type="text"
              placeholder="last name"
            />
          </div>
        </div>
        <div className="px-1 col-12 col-lg-6">
          <div className="input-wrapper w-100 mb-2">
            <input
              className="rounded-3 py-2"
              type="text"
              placeholder="middle initial"
            />
          </div>
        </div>
        <div className="px-1 col-12 col-lg-6">
          <div className="input-wrapper w-100 mb-2">
            <input
              className="rounded-3 py-2"
              type="text"
              placeholder="gender"
            />
          </div>
        </div>
      </div>
      <div className="row w-100 mb-3">
        <p className="mb-2 text-muted d-inline-block">Contact Information</p>
        <div className="px-1 col-12 col-lg-6">
          <div className="input-wrapper w-100 mb-2">
            <input className="rounded-3 py-2" type="text" placeholder="email" />
          </div>
        </div>
        <div className="px-1 col-12 col-lg-6">
          <div className="input-wrapper w-100 mb-2">
            <input className="rounded-3 py-2" type="text" placeholder="phone" />
          </div>
        </div>
      </div>
      <div className="row w-100 mb-3">
        <p className="mb-2 text-muted d-inline-block">Sabuag Information</p>
        <div className="px-1 col-12">
          <div className="input-wrapper w-100 mb-2">
            <input
              className="rounded-3 py-2"
              type="text"
              placeholder="position"
            />
          </div>
        </div>
      </div>
      {
        <StepsControls
          numberOfSteps={total_step}
          activeStep={activeStep}
          toggleSteps={setActiveStep}
        />
      }

      {activeStep === total_step && (
        <div className="buttn pt-4 w-100 px-1">
          <button className="px-3 py-2 btn btn-warning w-100 rounded-3">Sign Up</button>
        </div>
      )}

      <div className="d-flex align-items-center mt-4 mb-2">
        <p className="mb-0 text-muted fs-65">
          Already have an account?{" "}
          <span
            onClick={setToggleSignIn}
            className="ustp-primary cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
