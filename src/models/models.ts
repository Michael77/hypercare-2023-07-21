import { RecursivePartial } from "../type-helpers.ts";

export interface OrganizationChatsVariables {
  continuationId?: string;
  limit?: number;
  isPriority?: boolean;
}

export type ChatFields = RecursivePartial<BasicChatFields>[];

export interface BasicChatFields {
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
  archiveStatus: "archived" | "unarchived";
}

export interface ChatMemberFields {
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

export interface MessageFields {
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

export interface ReadReceiptFields {
  messageId: string;
  user: PublicUserFields;
  timestamp: string;
}

export interface PublicUserFields {
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

export interface PublicUserStatusFields {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  profilePic: { url: string };
}

export interface ConsultMessageData {
  mrn: string;
  firstname: string;
  lastname: string;
  details: string;
}

export interface ChatsForOrganizationResult {
  chatsForOrganization: {
    chats: BasicChatFields[];
  };
}
