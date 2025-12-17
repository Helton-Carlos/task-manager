<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { useBreakpoints } from "~/composables/useBreakpoints";
import { useApi } from "~/composables/useApi";
import { userStore } from "~/stores/user";
import * as yup from "yup";
import type { User } from "~/types/user";

const { post } = useApi();
const { login } = userStore();
const breakpoints = useBreakpoints();
const toast = useToast();

const register = ref<boolean>(false);

const schema = yup.object({
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup.string().required("Digite sua senha"),
});

const schemaRegister = yup.object({
  name: yup.string().email("Nome inválido").required("O Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup
    .string()
    .required("Digite sua senha")
    .required("O password é obrigatório"),
  passwordConfirm: yup
    .string()
    .required("Digite sua senha")
    .required("O password é obrigatório"),
});

const { handleSubmit } = useForm({
  validationSchema: !register.value ? schema : schemaRegister,
});

const { value: name, errorMessage: nameError } = useField<string>(
  "name",
  undefined,
  {
    initialValue: "",
  }
);
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

const { value: passwordConfirm, errorMessage: passwordConfirmError } =
  useField<string>("passwordConfirm", undefined, {
    initialValue: "",
  });

const submit = handleSubmit(async (values) => {
  try {
    const user = await post<User>("/login", {
      email: values.email,
      password: values.password,
    });

    if (user) {
      await login(user);
    } else {
      toast.error({
        title: "Erro!",
        message: "Falha, tente novamente...",
      });
    }
  } catch (error) {
    console.error(`Falha no login. Detalhes: ${error}`);

    toast.error({
      title: "Erro!",
      message: "Falha, tente novamente...",
    });
  }
});

const registerSubmit = handleSubmit(async (values) => {
  if (values.passwordConfirm === values.password) {
    try {
      const user = await post<User>("/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (user) {
        await login(user);
      } else {
        toast.error({
          title: "Erro!",
          message: "Falha, tente novamente...",
        });
      }
    } catch (error) {
      console.error(`Falha ao registar. Detalhes: ${error}`);

      toast.error({
        title: "Erro!",
        message: "Falha, tente novamente...",
      });
    } finally {
      register.value = false;
    }
  } else {
    register.value = false;

    toast.error({
      title: "Erro!",
      message: "Senha diferente da confirmação da senha",
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
      <form v-if="!register" class="form-login" @submit.prevent="submit">
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

        <GTButton
          type="button"
          underline
          class="flex items-center gap-2"
          @click="() => (register = true)"
        >
          <span>Ainda não sou cadastrado</span>
          <Icon name="lucide:arrow-right" size="12" color="blue"
        /></GTButton>

        <GTButton type="submit">Login</GTButton>
      </form>

      <form v-else class="form-login" @submit.prevent="registerSubmit">
        <h3 class="font-bold text-md text-xl">Cadastrar</h3>

        <GTInput
          id="name"
          v-model="name"
          label-title="Nome"
          type="text"
          placeholder="ex: John Silva"
        />
        <p class="text-red-500 text-sm">{{ nameError }}</p>

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

        <GTInput
          id="password_confirm"
          v-model="passwordConfirm"
          label-title="Confirmar senha"
          type="password"
          placeholder="ex: tes4@#$%"
        />
        <p class="text-red-500 text-sm">{{ passwordConfirmError }}</p>

        <GTButton type="submit">Cadastrar</GTButton>
      </form>
    </div>
  </div>
</template>
