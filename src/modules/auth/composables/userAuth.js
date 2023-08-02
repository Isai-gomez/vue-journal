import { useStore } from "vuex";
export const userAuth = () => {
  const store = useStore();
  const createUser = async (user) => {
    const res= await store.dispatch('createUser',user)
    return res
  };
  return {
    createUser
  }
};
