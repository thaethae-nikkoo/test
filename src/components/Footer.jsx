import { ThemeContext } from "../contexts/ThemeContext";
import useTheme from "../hooks/useTheme";

export default function Footer() {
  let { isDark } = useTheme(ThemeContext);
  return (
    <div className={isDark ? "bg-black text-white" : "bg-white text-black  "}>
      Footer
    </div>
  );
}
