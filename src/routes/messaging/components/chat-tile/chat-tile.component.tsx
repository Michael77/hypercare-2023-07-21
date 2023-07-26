import { ReactElement } from "react";
import classes from "./chat-tile.module.scss";
import { BasicChatFields } from "../../../../models/models.ts";
import { RecursivePartial } from "../../../../type-helpers.ts";
import UserAvatar from "../../../../components/user-avatar/user-avatar.component.tsx";
import { formatDate } from "../../../../time-util.ts";
import groupImgUrl from "../../../../assets/group.jpeg";

export default function ChatTile(props: {
  chat: RecursivePartial<BasicChatFields>;
}): ReactElement {
  const { chat } = props;

  function getChatTitle(): string {
    return chat.title ?? "";
  }

  function getChatBody(): string {
    return chat.lastMessage?.message ?? "";
  }

  function getAvatar(): ReactElement {
    return chat.type === "group" ? (
      <UserAvatar url={groupImgUrl}></UserAvatar>
    ) : (
      // TODO other avatar types
      <UserAvatar></UserAvatar>
    );
  }

  function onDownArrowClick() {}

  return (
    <div className={classes.chatTile}>
      {getAvatar()}

      <div className={classes.textCont}>
        <div className={classes.topTextRow}>
          <h2>{getChatTitle()}</h2>
          <time>{formatDate(chat.lastMessage?.dateCreated)}</time>
        </div>

        <div className={classes.bottomTextRow}>
          <p>{getChatBody()}</p>
          <button onClick={() => onDownArrowClick()}>⇓</button>
        </div>
      </div>
    </div>
  );
}
