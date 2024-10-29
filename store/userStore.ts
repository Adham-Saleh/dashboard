import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: (): any => ({ user: null }),
  getters: {
    currentUser: (state) => state.user,
  },
  actions: {
    setUser(user: any) {
      this.user = user;
    },
  },
});
