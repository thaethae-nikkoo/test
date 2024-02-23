import useTheme from "../hooks/useTheme";

export default function Navigation() {
  let { changeTheme, isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-black text-white" : "bg-white text-dark "}`}
    >
      Navbar
      <button
        className="bg-green-500 mx-4"
        onClick={() => changeTheme("light")}
      >
        Light Theme
      </button>
      <button className="bg-green-500 mx-4" onClick={() => changeTheme("dark")}>
        Dark Theme
      </button>
    </div>
  );
}
