import { ReactElement, useContext, useEffect } from "react";
import classes from "./archive.module.scss";
import { ChatStoreContext } from "../../stores/chat.store.tsx";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component.tsx";
import ChatTile from "../messaging/components/chat-tile/chat-tile.component.tsx";
import { ChatFields } from "../../models/models.ts";
import { getUnixTime } from "../../time-util.ts";

export default function ArchivePage(): ReactElement {
  const chatStoreContext = useContext(ChatStoreContext);

  useEffect(() => {
    chatStoreContext?.loadChats();
  }, []);

  function getSortedChats(chats: ChatFields | undefined): ChatFields {
    return (
      chats?.sort(
        (a, b) =>
          getUnixTime(b.lastMessage?.dateCreated) -
          getUnixTime(a.lastMessage?.dateCreated),
      ) ?? []
    );
  }

  return (
    <div className={classes.archivePage}>
      <header className={classes.pageHeader}>
        <div className={classes.headingCont}>
          <h1>Archived</h1>
          <a href="/">X</a>
        </div>
        <div className={classes.headingCont}>
          <h1>IPC Team</h1>
        </div>
      </header>

      <main className={classes.pageMain}>
        <div className={classes.chatList}>
          {chatStoreContext?.loadingChatFields ? (
            <div className={classes.loadingSpinner}>
              <LoadingSpinner></LoadingSpinner>
            </div>
          ) : (
            getSortedChats(
              chatStoreContext?.getChatsByArchiveStatus("archived"),
            ).map((chat) => (
              <ChatTile
                key={chat.chatId}
                chat={chat}
                setArchiveStatus={chatStoreContext?.setArchiveStatus}
              ></ChatTile>
            ))
          )}
        </div>

        <div className={classes.chatDisplay}></div>
      </main>
    </div>
  );
}
