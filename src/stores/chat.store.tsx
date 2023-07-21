import { createContext, ReactElement, ReactNode, useState } from "react";
import { getChats } from "../api/chat.api.ts";
import { sleep } from "../time-util.ts";
import { ChatFields } from "../models/models.ts";

interface ChatStoreProps {
  chatFields: ChatFields;
  loadingChatFields: boolean;
  loadingChatFieldsError: unknown | null;
  loadChats: () => Promise<void>;
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

  return (
    <ChatStoreContext.Provider
      value={{
        chatFields,
        loadingChatFields,
        loadingChatFieldsError,
        loadChats,
      }}
    >
      {props.children}
    </ChatStoreContext.Provider>
  );
}
