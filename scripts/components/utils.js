export const log = function () {
  const arr = [...arguments];
  return arr.map((arg) => console.log(arg));
};
