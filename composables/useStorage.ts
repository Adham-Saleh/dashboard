import { projectStorage } from "@/firebase/config";
import { ref as stRef, getDownloadURL, uploadBytes } from "firebase/storage";

const useStorage = function () {
  const error = ref<boolean | null>(null);
  const filePath = ref("");
  const url = ref("");

  const uploadImg = async function (file: any) {
    filePath.value = `cover/${file.name}`;
    const storageRef = stRef(projectStorage, filePath.value);
    try {
      const res = await uploadBytes(storageRef, file);
      url.value = await getDownloadURL(res.ref);
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return { error, url, uploadImg };
};

export default useStorage;
