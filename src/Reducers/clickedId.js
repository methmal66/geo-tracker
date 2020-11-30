const init = "";

const clickedId = (state = init, action) => {
  switch (action.type) {
    case "SET_CLICKED_ID":
      return action.id;

    default:
      return state;
  }
};

export default clickedId;
