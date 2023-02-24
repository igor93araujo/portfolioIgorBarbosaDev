// ACTIONS TYPE
export const THEME_TOGGLE = 'THEME_TOGGLE';
export const MENU_TOGGLE = 'MENU_TOGGLE'

// ACTION CREATOR
export const SetTheme = () => ({
  type: THEME_TOGGLE,
});

export const SetMenu = () => ({
  type: MENU_TOGGLE,
})