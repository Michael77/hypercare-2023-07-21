import React from "react";
import ReactDOM from "react-dom/client";
import "the-new-css-reset/css/reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MessagingPage from "./routes/messaging/messaging.page.tsx";
import "./global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MessagingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
