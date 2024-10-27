import { onAuthStateChanged } from "firebase/auth";
import { projectAuth } from "~/firebase/config";

const user = ref(projectAuth.currentUser);

onAuthStateChanged(projectAuth, (_user) => {
  user.value = _user;
});

const getUser = function () {
  return { user };
};

export default getUser;
