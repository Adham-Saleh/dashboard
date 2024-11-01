const authentication = function () {
  return useCookie("user").value;
};
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(authentication());
  if (true) {
    navigateTo("/");
  }
});
