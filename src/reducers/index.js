import { combineReducers } from "redux";
import * as types from "./types";

export const initialState = {
  selectedDate: null,
  step: 1,
  title: "Select a time"
};
export default function setDateReducer(state = initialState, action) {
  switch (action.type) {
    case types.DATE_SELECTED: {
      return {
        ...state,
        selectedDate: action.date
      };
    }
    case types.SET_STEP: {
      return {
        ...state,
        title: "Select a time",
        step: action.value
      };
    }
    default:
      return state;
  }
}
// const rootReducer = combineReducers({
//   setDate
// });

// export default rootReducer;
