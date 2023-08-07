import { useStore } from "vuex";
import {computed} from "vue"
export const userAuth = () => {
  const store = useStore();
  const createUser = async (user) => {
    const res = await store.dispatch("createUser", user);
    return res;
  };
  const loginUser = async (user) => {
    const res = await store.dispatch("singInUser", user);
    return res;
  };
  const checkAuthStatus = async () => {
    const resp = await store.dispatch("chechAUtentication");
    return resp;
  };
  const logout= ()=>{
    store.commit("logout")
    store.commit("journal/clearEntries")
    
     
  }
  return {
    createUser,
    checkAuthStatus,
    loginUser,
    logout,
    authStatus:computed(()=>store.getters['currentState']),
    userName:computed(()=>store.getters['userName']),
  };
};
