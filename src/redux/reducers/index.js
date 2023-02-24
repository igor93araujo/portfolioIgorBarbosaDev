import { combineReducers } from 'redux';

const INITIAL_STATE = {
  theme: 'white',
  menu: false
  };

  const themeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case "THEME_TOGGLE":
        return {
          ...state,
          theme: state.theme === "dark" ? "light" : "dark"
          }
      case "MENU_TOGGLE":
        return {
          state,
          menu: true,
        }
          default:
            return state;
    }
  };
  
  const rootReducer = combineReducers({ themeReducer });
  
  export default rootReducer;