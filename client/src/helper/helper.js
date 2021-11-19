export const randomOrderNumber = () => {
  const randomOrderNumber = Math.floor(Math.random() * 90000) + 10000;
  return randomOrderNumber.toString();
};
