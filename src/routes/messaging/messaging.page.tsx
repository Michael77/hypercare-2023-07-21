import { ReactElement, useContext, useEffect } from "react";
import classes from "./messaging.module.scss";
import { ChatStoreContext } from "../../stores/chat.store.tsx";

export default function MessagingPage(): ReactElement {
  const chatStoreContext = useContext(ChatStoreContext);

  useEffect(() => {
    chatStoreContext?.loadChats();
  }, []);

  return (
    <div className={classes.messagingPage}>
      <header className={classes.pageHeader}>
        <div className={classes.headingCont}>
          <h1>Messaging</h1>
        </div>
        <div className={classes.headingCont}>
          <h1>IPC Team</h1>
        </div>
      </header>

      <main className={classes.pageMain}>
        <div className={classes.chatList}></div>

        <div className={classes.chatDisplay}></div>
      </main>
    </div>
  );
}
