import apis from "utils/apis";
import axios from "utils/axios";
import store from "store";
import { setAccessToken } from "../authSlice";
import { SignInType, SignInResponse } from "../types";

const AuthApi = {
  login: async (data: SignInType) => {
    try {
      const res: SignInResponse = await axios.post(apis.login, data);
      store.dispatch(setAccessToken(res.token || null));

      return {
        success: true,
      };
    } catch (e) {
      return {
        success: false,
        message: e.error,
      };
    }
  },
};

export default AuthApi;
