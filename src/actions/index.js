import * as types from "./types";

export const dateSelected = (date, time) => ({
  type: types.DATE_SELECTED,
  date: { date: date, time: time }
});
