// src/pages/VerifyAccount.jsx
import React from "react";
import TextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import useVerify from "../../hooks/useVerify";
import { useLocation } from "react-router-dom";

function VerifyAccount() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("ui");

  const {
    verificationCode,
    setVerificationCode,
    verifyLoading,
    verifyError,
    verifySuccess,
    handleVerifySubmit,
  } = useVerify(userId);

  return (
    <div className="h-screen w-full flex place-content-center place-items-center">
      <div className="bg-white flex space-x-6 w-1/2 h-1/2 place-content-center place-items-center p-8 rounded-lg">
        <div className="flex flex-col space-y-6 place-content-center place-items-center w-full">
          <h1 className="text-3xl font-bold text-center">VERIFY MY ACCOUNT</h1>
          <form onSubmit={handleVerifySubmit} className="flex flex-col space-y-6">
            <TextInput
              name="verificationCode"
              placeholder="Your verification code please..."
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <SubmitButton value={verifyLoading ? "Checking..." : "Check Out"} />
            {verifyError && <p className="text-red-600">{verifyError}</p>}
            {verifySuccess && <p className="text-green-600">Account verified successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccount;
