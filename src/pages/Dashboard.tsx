import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Dashboard = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div>Dashboard {theme}</div>
      <button onClick={() =>  theme === "light" ? setTheme("dark") : setTheme("light")}>Change Theme</button>
    </>
  );
};

export default Dashboard;
