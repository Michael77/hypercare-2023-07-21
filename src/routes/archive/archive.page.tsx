import { ReactElement, useContext, useEffect } from "react";
import classes from "./archive.module.scss";
import { ChatStoreContext } from "../../stores/chat.store.tsx";

export default function ArchivePage(): ReactElement {
  const chatStoreContext = useContext(ChatStoreContext);

  useEffect(() => {
    chatStoreContext?.loadChats();
  }, []);

  return <div className={classes.messagingPage}></div>;
}
