<script setup lang="ts">
const formLogin = reactive({
  email: '',
  password: '',
});

async function login() {
  if (!formLogin.email || !formLogin.password) {
    navagationTo('/dashboard');
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="login">
      <GTInput
        labelTitle="E-mail"
        id="email"
        type="email"
        v-model="formLogin.email"
        placeholder="Enter your username"
      />
      <GTInput
        labelTitle="Password"
        id="password"
        type="password"
        v-model="formLogin.password"
        placeholder="Enter your password"
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
