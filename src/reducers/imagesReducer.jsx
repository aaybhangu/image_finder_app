export default (state = [], action) => {
  switch (action.type) {
    case "GET_IMAGES":
      return action.payload;
    default:
      return state;
  }
};
