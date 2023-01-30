import { combineReducers } from 'redux';

const INITIAL_STATE = {
  theme: 'white',
  };

  const themeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case "THEME_TOGGLE":
        return {
          ...state,
          theme: state.theme === "dark" ? "light" : "dark"
          }
          default:
            return state;
    }
  };
  
  const rootReducer = combineReducers({ themeReducer });
  
  export default rootReducer;