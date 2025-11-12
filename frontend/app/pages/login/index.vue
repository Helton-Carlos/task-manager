<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const toast = useToast();

const schema = yup.object({
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup.string().required("Digite sua senha"),
});

const { handleSubmit } = useForm({ validationSchema: schema });

const { value: email, errorMessage: emailError } = useField<string>(
  "email",
  undefined,
  {
    initialValue: "",
  }
);
const { value: password, errorMessage: passwordError } = useField<string>(
  "password",
  undefined,
  {
    initialValue: "",
  }
);

const login = handleSubmit(async (values) => {
  if (values.email && values.password) {
    await navigateTo("/");

    toast.success({
      title: "Sucesso!",
      message: "Seja bem-vindo!",
    });
  } else {
    toast.error({
      title: "Erro!",
      message: "Falha, tente novamente...",
      timeout: 30000,
    });
  }
});

definePageMeta({
  layout: "login",
});
</script>

<template>
  <form @submit.prevent="login" class="form-login">
    <GTInput
      labelTitle="E-mail"
      id="email"
      type="email"
      v-model="email"
      placeholder="ex: john@gmail.com"
    />
    <p class="text-red-500 text-sm">{{ emailError }}</p>

    <GTInput
      labelTitle="Password"
      id="password"
      type="password"
      v-model="password"
      placeholder="ex: tes4@#$%"
    />
    <p class="text-red-500 text-sm">{{ passwordError }}</p>

    <GTButton type="submit">Login</GTButton>
  </form>
</template>
