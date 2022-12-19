export const inputReducerInitState = {
  dateOfActivity: "",
  timeOfActivity: 0,
  distanceOfActivity: 0,
  speedOfActivity: 0,
};

export const inputReducer = (state, action) => {
  switch (action.type) {
    //state do kontrolowania inputów
    case "setDate":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "setTime":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "setDistance":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};
