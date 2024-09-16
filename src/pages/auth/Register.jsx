// src/pages/Register.jsx
import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/login.jpg";
import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import SubmitButton from "../../components/SubmitButton";
import EmailInput from "../../components/EmailInput";
import useRegister from "../../hooks/useRegister";

function Register() {
  const { formData, handleChange, handleSubmit, loading, error, success, userId } =
    useRegister();
  
  return (
    <div className="h-screen w-full flex place-content-center place-items-center">
      <div className="bg-white flex space-x-6 w-3/4 h-3/4 p-8 rounded-lg">
        <div className="h-full w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="flex flex-col space-y-6 place-content-center place-items-center w-1/2">
          <h1 className="text-5xl font-bold text-center">REGISTER</h1>
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="flex flex-col space-y-6"
          >
            <TextInput
              onChange={handleChange}
              name="username"
              value={formData.username}
              placeholder="Entrez votre username..."
            />
            <EmailInput
              onChange={handleChange}
              name="email"
              value={formData.email}
              placeholder="exemple@mail.fr"
            />
            <PasswordInput
              onChange={handleChange}
              name="password"
              value={formData.password}
              placeholder="Entrez votre mot de passe"
            />
            <PasswordInput
              name="confirmation_password"
              placeholder="Confirmer votre mot de passe"
            />
            <SubmitButton value={loading ? "En cours..." : "Sign up"} />
            <p className="text-center">
              Already having an account?{" "}
              <Link
                to="/login"
                className="text-red-600 underline cursor-pointer"
              >
                Sign in
              </Link>
            </p>
          </form>

          {/* Afficher les messages d'erreur et de succès */}
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">Inscription réussie !</p>}
        </div>
      </div>
    </div>
  );
}

export default Register;
