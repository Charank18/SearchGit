import { useContext } from "react";
import { ThemeContext } from "./ThemeeProvider";
import { UserContext } from "./UserProvider";

const useTheme = () => useContext(ThemeContext);
const useGithubUser = () => useContext(UserContext);

export { useTheme, useGithubUser };