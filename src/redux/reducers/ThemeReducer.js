const INITIAL_STATE = {
  darkMode: false,
};

export const themeReducerTypes = {
  CHANGE_MODE: 'CHANGE_MODE',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case themeReducerTypes.CHANGE_MODE:
      var tempState = state.darkMode;
      return {...state, darkMode: !tempState};
    case themeReducerTypes.REMOVE_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
};
