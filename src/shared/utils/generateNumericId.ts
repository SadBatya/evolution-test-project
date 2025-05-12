export const generateNumericId = (): number => {
  const timestamp = Date.now();
  const randomPart = Math.floor(Math.random() * 1000);
  const numericId = Number(`${timestamp}${randomPart}`);
  return numericId;
};
