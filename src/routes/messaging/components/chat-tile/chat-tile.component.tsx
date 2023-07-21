import { ReactElement } from "react";
import classes from "./chat-tile.module.scss";
import { BasicChatFields } from "../../../../models/models.ts";
import { RecursivePartial } from "../../../../type-helpers.ts";
import UserAvatar from "../../../../components/user-avatar/user-avatar.component.tsx";
import { formatDate } from "../../../../time-util.ts";

export default function ChatTile(props: {
  chat: RecursivePartial<BasicChatFields>;
}): ReactElement {
  const { chat } = props;

  function getChatTitle(): string {
    return chat.title ?? "";
  }

  return (
    <div className={classes.chatTile}>
      <UserAvatar></UserAvatar>

      <div className={classes.textCol}>
        <h2>{getChatTitle()}</h2>
        <p></p>
      </div>

      <div className={classes.dateCol}>
        <time>{formatDate(chat.lastMessage?.dateCreated)}</time>
      </div>
    </div>
  );
}
