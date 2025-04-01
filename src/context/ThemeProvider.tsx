import React, { createContext, useState } from "react";

interface IThemeProviderProps {
  children: React.ReactNode;
}
// Khởi tạo context
export const ThemeContext = createContext({});
const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState("light");
  return (
    // Provider là nhà cung cấp gia tri
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
