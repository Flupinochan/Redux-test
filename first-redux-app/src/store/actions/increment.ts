export const increment = (number: number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};
