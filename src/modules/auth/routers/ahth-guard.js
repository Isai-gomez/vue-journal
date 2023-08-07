import store from "@/store";
export const isAuthenticateGuardteGuard = async (to, from, next) => {
  const { ok } = await store.dispatch("chechAUtentication");
  if (ok) {
    next();
  } else {
    next({ name: 'login' });
  }
};
