import { ReactElement } from "react";
import classes from "./messaging.module.scss";

export default function MessagingPage(): ReactElement {
  return (
    <div className={classes.messagingPage}>
      <h1 className={classes.customH1}>Messaging Page</h1>
    </div>
  );
}
