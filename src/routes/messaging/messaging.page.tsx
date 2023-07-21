import { ReactElement } from "react";
import classes from "./messaging.module.scss";

export default function MessagingPage(): ReactElement {
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
