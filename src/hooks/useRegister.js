// src/hooks/useRegister.js
import { useState, useEffect } from "react";
import authApi from "../api/authApi";
import { useNavigate } from "react-router-dom";

const { registerUser } = authApi;

const useRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [userId, setUserId] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await registerUser(formData);
      console.log(response); // Debugging line
      if (
        response.status === "success" &&
        response.data &&
        response.data.user
      ) {
        const { user } = response.data;
        setUserId(user.id);
        setVerificationCode(user.verificationCode);
        setSuccess(true);
      }
    } catch (error) {
      setError("Échec de l'inscription",error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Success:", success);
    console.log("User ID:", userId);
    if (success && userId) {
      navigate(`/verification?ui=${userId}`);
    }
  }, [success, userId, navigate]);

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    success,
    userId,
    verificationCode,
  };
};

export default useRegister;
