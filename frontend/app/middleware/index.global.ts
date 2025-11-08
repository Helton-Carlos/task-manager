export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Global middleware executed to:' + to.path);
  console.log('Global middleware executed from:' + from.path);
});
