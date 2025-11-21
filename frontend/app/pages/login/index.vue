<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { useBreakpoints } from "~/composables/useBreakpoints";
import * as yup from "yup";

const breakpoints = useBreakpoints();

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
      title: "Sucesso",
      message: "Seja bem-vindo",
    });
  } else {
    toast.error({
      title: "Erro!",
      message: "Falha, tente novamente...",
    });
  }
});

definePageMeta({
  layout: "login",
});
</script>

<template>
  <div class="flex justify-between">
    <div
      v-if="breakpoints.sm.value"
      class="bg-blue-700 bg-center min-w-[50%] h-screen bg-[url(https://www.mundovirtualbrasil.com.br/wp-content/uploads/2024/02/Intermediacao-de-negocios.jpg)] bg-cover bg-center bg-blend-multiply h-64 flex items-center justify-center"
    >
      <div class="flex flex-col">
        <h3 class="font-bold text-white text-md text-[2rem]">
          Organize seu negócio
        </h3>
        <h1 class="font-bold text-blue-700 text-[8rem]">CRM</h1>
        <p class="text-white italic">"Melhor controle no seu atendimento"</p>
      </div>
    </div>

    <div
      class="min-h-screen bg-gray-50 px-4 w-full flex justify-center items-center shadow-md"
    >
      <form class="form-login" @submit.prevent="login">
        <h3 class="font-bold text-md text-xl">Login</h3>
        <GTInput
          id="email"
          v-model="email"
          label-title="E-mail"
          type="email"
          placeholder="ex: john@gmail.com"
        />
        <p class="text-red-500 text-sm">{{ emailError }}</p>

        <GTInput
          id="password"
          v-model="password"
          label-title="Password"
          type="password"
          placeholder="ex: tes4@#$%"
        />
        <p class="text-red-500 text-sm">{{ passwordError }}</p>

        <GTButton type="submit">Login</GTButton>
      </form>
    </div>
  </div>
</template>
