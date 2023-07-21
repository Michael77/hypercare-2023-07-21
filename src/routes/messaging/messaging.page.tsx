import { ReactElement } from "react";
import classes from "./messaging.module.scss";

export default function MessagingPage(): ReactElement {
  return (
    <div className={classes.messagingPage}>
      <header className={classes.pageHeader}>
        <div className={classes.headingCont}>
          <h3>Messaging</h3>
        </div>
        <div className={classes.headingCont}>
          <h3>IPC Team</h3>
        </div>
      </header>
    </div>
  );
}
