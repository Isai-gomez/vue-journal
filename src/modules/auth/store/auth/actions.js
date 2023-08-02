import { authApi } from "../../../../api/authApi";
export const createUser = async ({ commit }, user) => {
  try {
    const { name, email, password } = user;
    const { data } = await authApi.post(":signUp", {
      email,
      password,
      returnSecureToken: true,
    });
    const { idToken, refreshToken } = data;
    const resp = await authApi.post(":update", { diplayName: name, idToken });
    console.log(resp);
    delete user.password;
    commit("loginUser", { user, idToken, refreshToken });
    return {
      ok: true,
    };
  } catch (error) {
    console.log(error.response.data.error.message);
    return {
      ok: false,
      mensaje: error.response.data.error.message,
    };
  }
};
