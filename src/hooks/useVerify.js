// src/hooks/useVerify.js
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import authApi from "../api/authApi";
import { isValidObjectId } from "../utils/validateObjectId";

const { verifyAccount } = authApi;

const useVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("ui");
  const [verificationCode, setVerificationCode] = useState("");
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [verifySuccess, setVerifySuccess] = useState(false);

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    if (!userId || !isValidObjectId(userId)) {
      setVerifyError("Invalid user ID");
      return;
    }
    setVerifyLoading(true);
    try {
      await verifyAccount(userId, verificationCode);
      setVerifySuccess(true);
    } catch (error) {
      setVerifyError("Invalid verification code");
    } finally {
      setVerifyLoading(false);
    }
  };

  useEffect(() => {
    if (verifySuccess) {
      navigate("/dashboard");
    }
  }, [verifySuccess, navigate]);

  return {
    verificationCode,
    setVerificationCode,
    verifyLoading,
    verifyError,
    verifySuccess,
    handleVerifySubmit,
  };
};

export default useVerify;
