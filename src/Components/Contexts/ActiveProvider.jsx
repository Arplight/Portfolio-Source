import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ActiveContext = createContext();

export default function ActiveProvider(Props) {
  const [active, setActive] = useState(localStorage.getItem("active"));
  const location = useLocation().pathname.slice(1);

  function activeSetter(e) {
    let target = e.currentTarget.getAttribute("data-active");
    setActive(target);
  }
  // Local Storage & Current Path
  useEffect(() => {
    localStorage.setItem("active", active);
    setActive(location);
  }, [active, location]);

  return (
    <ActiveContext.Provider value={{ active, activeSetter }}>
      {Props.children}
    </ActiveContext.Provider>
  );
}
