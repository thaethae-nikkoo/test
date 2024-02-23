import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import useTheme from "../hooks/useTheme";
import { useEffect } from "react";

export default function Layout() {
  let { isDark } = useTheme();

  useEffect(() => {
    let body = document.body;
    if (isDark) {
      body.classList.add("bg-black-50");
    } else {
      body.classList.remove("bg-black-50");
    }
  }, [isDark]);

  return (
    <>
      <Navigation />
      <div
        className={`page  ${
          isDark ? "bg-black text-white" : "bg-white text-black-500  "
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
