import { ReactElement } from "react";
import classes from "./user-avatar.module.scss";

interface props {
  url?: string;
  text?: string;
}

export default function UserAvatar(props: props): ReactElement {
  return (
    <div className={classes.userAvatar}>
      {props.url ? <img src={props.url}></img> : <span>{props.text}</span>}
    </div>
  );
}
