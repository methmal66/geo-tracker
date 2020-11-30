const init = [];

const wildFires = (state = init, action) => {
  switch (action.type) {
    case "ADD_WILD_FIRE":
      return [
        ...state,
        {
          info: {
            id: action.payload.id,
            title: action.payload.title,
            link: action.payload.sources[0].url,
          },
          cords: {
            lat: action.payload.geometries[0].coordinates[1],
            lng: action.payload.geometries[0].coordinates[0],
          },
        },
      ];

    default:
      return state;
  }
};

export default wildFires;
