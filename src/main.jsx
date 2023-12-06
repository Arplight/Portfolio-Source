import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// Providers
import ThemeProvider from "./Components/Contexts/ThemeProvider.jsx";
import ActiveProvider from "./Components/Contexts/ActiveProvider.jsx";
import ToastProvider from "./Components/Contexts/ToastProvider.jsx";
import PaginationProvider from "./Components/Contexts/PaginationProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};
// serviceWorker registering
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio/">
      <ThemeProvider>
        <ToastProvider>
          <ActiveProvider>
            <PaginationProvider>
              <HelmetProvider context={helmetContext}>
                <App />
              </HelmetProvider>
            </PaginationProvider>
          </ActiveProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
