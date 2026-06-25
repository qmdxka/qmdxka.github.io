import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// 这是 React 的启动点：把 App 组件放到 index.html 里的 #root。
createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
