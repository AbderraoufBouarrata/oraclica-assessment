import { factsType } from "../../types/fact";

export const factsReducer = (state: factsType, action: any): factsType => {
  switch (action.type) {
    case "RESET_FACTS":
      localStorage.setItem("facts", JSON.stringify([]));
      return [];

    case "SAVE_FACT":
      const saveRes = state.map((fact) =>
        fact.index === action.index ? { ...fact, isSaved: true } : fact
      );
      localStorage.setItem("facts", JSON.stringify(saveRes));
      return saveRes;

    case "UNSAVE_FACT":
      const unSaveRes = state.map((fact) =>
        fact.index === action.index ? { ...fact, isSaved: false } : fact
      );
      localStorage.setItem("facts", JSON.stringify(unSaveRes));
      return unSaveRes;

    case "REMOVE_FACT":
      const removeRes = state.filter((fact) => fact.index !== action.index);
      localStorage.setItem("facts", JSON.stringify(removeRes));
      return removeRes;

    case "SET_FACTS":
      localStorage.setItem("facts", JSON.stringify(action.facts));
      return action.facts;

    default:
      return state;
  }
};
