import { createContext } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export function DarkToastContainer() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
}

export function LightToastContainer() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}
export const ToastContext = createContext();

export default function ToastProvider(Props) {
  function toastHandler() {
    toast.success("Thanks for your submission ");
  }
  return (
    <ToastContext.Provider value={toastHandler}>
      {Props.children}
    </ToastContext.Provider>
  );
}
