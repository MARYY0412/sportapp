export const sortReducerInitState = {
  dateSort: false,
  timeSort: false,
  distanceSort: false,
};
export const sortReducer = (state, action) => {
  switch (action.type) {
    case "dateSort":
      return { ...state, dateSort: !state.dateSort };
    case "timeSort":
      return { ...state, timeSort: !state.timeSort };
    case "distanceSort":
      return { ...state, distanceSort: !state.distanceSort };
    default:
      return state;
  }
};
