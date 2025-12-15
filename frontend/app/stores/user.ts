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

    console.log(auth.value);

    await navigateTo("/");

    toast.success({
      title: "Sucesso",
      message: "Seja bem-vindo",
    });
  }

  return {
    user,
    auth,
    login,
  };
});
