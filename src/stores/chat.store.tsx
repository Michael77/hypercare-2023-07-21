import { BasicChatFields } from "../models/models.ts";
import { createContext, ReactElement, ReactNode, useState } from "react";

interface ChatStoreProps {
  chatFields: BasicChatFields[];
  loadingChatFields: boolean;
  loadingChatFieldsError: Error | null;
}

export const ChatStoreContext = createContext<ChatStoreProps | null>(null);

export default function ChatStoreProvider(props: {
  children: ReactNode;
}): ReactElement {
  const [chatFields, setChatFields] = useState<BasicChatFields[]>([]);
  const [loadingChatFields, setLoadingChatFields] = useState<boolean>(false);
  const [loadingChatFieldsError, setLoadingChatFieldsError] =
    useState<Error | null>(null);

  return (
    <ChatStoreContext.Provider
      value={{ chatFields, loadingChatFields, loadingChatFieldsError }}
    >
      {props.children}
    </ChatStoreContext.Provider>
  );
}
