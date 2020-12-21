import React, {createContext, useContext} from 'react';
const ThemeContext = createContext();

export const ThemeContextProvider = ({children, theme}) => {
  return (
    <ThemeContext.Provider value={{theme: theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
  return (props) => {
    const {theme} = useContext(ThemeContext);
    return <Component {...props} theme={theme} />;
  };
}
