import { createContext, ReactElement, ReactNode, useState } from "react";
import { getChats, setAPIArchiveStatus } from "../api/chat.api.ts";
import { sleep } from "../time-util.ts";
import { ArchiveStatus, ChatFields } from "../models/models.ts";

interface ChatStoreProps {
  chatFields: ChatFields;
  loadingChatFields: boolean;
  loadingChatFieldsError: unknown | null;
  loadChats: () => Promise<void>;
  setArchiveStatus: (s: string, a: ArchiveStatus) => Promise<void>;
  getChatsByArchiveStatus: (a: ArchiveStatus) => ChatFields;
}

export const ChatStoreContext = createContext<ChatStoreProps | null>(null);

export default function ChatStoreProvider(props: {
  children: ReactNode;
}): ReactElement {
  const [chatFields, setChatFields] = useState<ChatFields>([]);
  const [loadingChatFields, setLoadingChatFields] = useState<boolean>(false);
  const [loadingChatFieldsError, setLoadingChatFieldsError] = useState<
    unknown | null
  >(null);

  const [archiveStatusError, setArchiveStatusError] = useState<unknown | null>(
    null,
  );

  function getChatsByArchiveStatus(archiveStatus: ArchiveStatus): ChatFields {
    return chatFields.filter((chat) => chat.archiveStatus === archiveStatus);
  }

  async function loadChats(): Promise<void> {
    if (loadingChatFields) {
      return;
    }

    setChatFields([]);
    setLoadingChatFields(true);
    setLoadingChatFieldsError(null);

    try {
      await sleep(500);
      const chatFields = await getChats();
      setChatFields(chatFields);
    } catch (e) {
      setLoadingChatFieldsError(e);
    } finally {
      setLoadingChatFields(false);
    }
  }

  async function setArchiveStatus(chatId: string, status: ArchiveStatus) {
    try {
      await setAPIArchiveStatus(chatId, status);
    } catch (e) {
      setArchiveStatusError(e);
      return;
    }

    let chats = [...chatFields];
    const chat = chats.find((chat) => chat.chatId === chat);
    if (chat) {
      chat.archiveStatus = status;
    }

    setChatFields(chats);
  }

  return (
    <ChatStoreContext.Provider
      value={{
        chatFields,
        loadingChatFields,
        loadingChatFieldsError,
        loadChats,
        setArchiveStatus,
        getChatsByArchiveStatus,
      }}
    >
      {props.children}
    </ChatStoreContext.Provider>
  );
}
