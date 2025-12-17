import { defineStore } from "pinia";
import type { User } from "~/types/user";

export const userStore = defineStore("user", () => {
  const user = ref<User | null>(null);
  const auth = ref<boolean | null>(null);

  const toast = useToast();

  async function login(login: any) {
    const { users, authentication } = login;

    user.value = users;
    auth.value = authentication;

    await navigateTo("/");

    toast.success({
      title: "Sucesso",
      message: "Seja bem-vindo",
    });
  }

  async function logoff() {
    user.value = null;
    auth.value = null;

    await navigateTo("/login");
  }

  return {
    user,
    auth,
    login,
    logoff,
  };
});
