type CounterAction = { type: "INCREMENT"; payload: number } | { type: "DECREMENT" };

export const counterReducer = (state = 0, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
