import { useState } from "react";

export function useFocus() {
  const [focus, setFocus] = useState(null);
  function focusSetter(e) {
    let target = e.currentTarget.getAttribute("data-focus");
    setFocus(target);
    e.target.addEventListener("blur", () => setFocus(null));
  }
  return [focus, focusSetter];
}
