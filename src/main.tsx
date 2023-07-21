import React from "react";
import ReactDOM from "react-dom/client";
import "the-new-css-reset/css/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessagingPage from "./routes/messaging/messaging.page.tsx";
import "./global.scss";
import ChatStoreProvider from "./stores/chat.store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChatStoreProvider>
        <Routes>
          <Route path="/" Component={MessagingPage}></Route>
        </Routes>
      </ChatStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
