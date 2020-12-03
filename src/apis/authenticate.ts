import apis from "../utils/apis";
import axios from "../utils/axios";
import store from "../store";
import { setAccessToken } from "../store/modules/authenticateSlice";

interface SignInData {
  email: string;
  password: string;
}

const AuthenticateApi = {
  login: async (data: SignInData) => {
    try {
    } catch (e) {
      return {
        success: false,
        message: e.error,
      };
    }
  },
  register: async (email: string, password: string): Promise<any> => {
    try {
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

export default AuthenticateApi;
