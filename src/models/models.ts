interface OrganizationChatsVariables {
  continuationId?: string;
  limit?: number;
  isPriority?: boolean;
}

interface BasicChatFields {
  chatId: string;
  title?: string;
  type: "self" | "single" | "group";
  members: ChatMemberFields[];
  lastMessage: MessageFields;
  muted: boolean;
  status: string;
  dateCreated: string;
  isArchived: boolean;
  unreadPriorityMessages: number;
}

interface ChatMemberFields {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  profilePic: { url: string };
  status: string;
  privilege: string;
  workStatus: string;
  statusExpiryDate: string;
  statusDescription: string;
  workStatusProxy: PublicUserStatusFields;
}

interface MessageFields {
  id: string;
  priority: boolean;
  message: string;
  image: string;
  mimeType: string;
  type: string;
  dateCreated: string;
  sender: PublicUserFields;
  readBy: ReadReceiptFields[];
  data?: ConsultMessageData;
}

interface ReadReceiptFields {
  messageId: string;
  user: PublicUserFields;
  timestamp: string;
}

interface PublicUserFields {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  profilePic: { url: string };
  workStatus: string;
  statusDescription: string;
  workStatusProxy: PublicUserStatusFields;
}

interface PublicUserStatusFields {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  profilePic: { url: string };
}

interface ConsultMessageData {
  mrn: string;
  firstname: string;
  lastname: string;
  details: string;
}

interface ChatsForOrganizationResult {
  chatsForOrganization: {
    chats: BasicChatFields[];
  };
}
