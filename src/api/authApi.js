import apiClient from "./apiClient";

const registerUser = async (userData) => {
  try {
    const response = await apiClient.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    throw error;
  }
};

const verifyAccount = async (user_id, verificationCode) => {
  try {
    const response = await apiClient.get(
      `/auth/verify?ui=${user_id}&vc=${verificationCode}`,
      verificationCode
    );
    return response.data;
  } catch (error) {
    console.error("Erreur de verification: ", error);
    throw error;
  }
};

const loginUser = async (userData) => {
  try {
    const response = await apiClient.post("/auth/login", userData);
    console.log('iduser',response.data)
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la connexion : ", error);
    throw error;
  }
};

export default { registerUser, verifyAccount, loginUser };
