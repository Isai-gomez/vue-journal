import axios from "axios";
import { key } from "./key";
export const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key,
  },
});

