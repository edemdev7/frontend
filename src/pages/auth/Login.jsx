import PasswordInput from "../../components/PasswordInput";
import SubmitButton from "../../components/SubmitButton";
import EmailInput from "../../components/EmailInput";
import registerImage from "../../assets/register2.jpg";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    success,
    userId,
  } = useLogin();

  return (
    <div className="h-screen w-full flex place-content-center place-items-center">
      <div className="bg-white flex space-x-6 w-3/4 h-3/4 p-8 rounded-lg">
        <div className="h-full w-1/2">
          <img src={registerImage} alt="" className="" />
        </div>
        <div className="flex flex-col space-y-6 place-content-center place-items-center w-1/2">
          <h1 className="text-5xl font-bold text-center">SING IN</h1>
          <p>A good security is the key</p>
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="flex flex-col space-y-6"
          >
            <EmailInput
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="exemple@mail.fr"
            />
            <PasswordInput
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Entrez votre mot de passe"
            />
            <SubmitButton value="Sign In" />
            <p className="text-center">
              New to dashboard ?{" "}
              <Link to="/" className="text-red-600 underline cursor-pointer">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
