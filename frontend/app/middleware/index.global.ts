import { userStore } from "~/stores/user";
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware((to, _from) => {
  const store = userStore();
  const { auth } = storeToRefs(store);

  const isAuthenticated = auth.value;

  console.log(isAuthenticated);

  if (!isAuthenticated && to.name !== "login") {
    return navigateTo("/login");
  }

  if (isAuthenticated && to.name === "login") {
    return navigateTo("/");
  }
});
