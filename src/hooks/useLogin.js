import authApi from "../api/authApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { loginUser } = authApi;

const useLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [userId, setUserId] = useState(null);

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
      const response = await loginUser(formData);
      if (
        response.status === "success" &&
        response.data &&
        response.data.user
      ) {
        const { user } = response.data;
        setUserId(user.id);
        setSuccess(true);
      }
    } catch (error) {
      setError("Échec lors de la connexion",error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem('userId', userId);
    console.log("success :", success);
    console.log("userId : ", userId);

    if (success && userId) {
      navigate("/dashboard");
    }
  });

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    success,
    userId,
  };
};

export default useLogin;
