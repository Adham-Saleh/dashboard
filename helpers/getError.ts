export const getError = function (name: string, errorBag: any) {
  if (!errorBag || !errorBag[name]) return false;
  const err = errorBag.value[name];
  return err ? err[0] : false;
};
