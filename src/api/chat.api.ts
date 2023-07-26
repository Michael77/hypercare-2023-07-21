import { ArchiveStatus, ChatFields } from "../models/models.ts";

export async function getChats(): Promise<ChatFields> {
  // call GQL API and return chats
  // hard-mocked for now (easy mocks with RecursivePartial)

  return mockChatFields;
}

export async function setAPIArchiveStatus(
  chatId: string,
  status: ArchiveStatus,
): Promise<void> {
  return;
}

const mockUsers = {
  derek: {
    id: "asdfalksdhfklh",
    firstname: "Derek",
    profilePic: { url: "/assets/dog.jpeg" },
  },
  ashton: { id: "as908dfhjas", firstname: "Ashton" },
  emily: { id: "as908dfhjas", firstname: "Emily" },
};

const mockChatFields: ChatFields = [
  {
    archiveStatus: "unarchived",
    type: "self",
    title: "My very own chat",
    lastMessage: {
      dateCreated: "2023-07-21T19:08:03+00:00",
      message: "Hey dude",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek],
  },
  {
    archiveStatus: "unarchived",
    type: "group",
    title: "Group chat",
    lastMessage: {
      dateCreated: "2023-06-21T19:08:03+00:00",
      message: "It's me again",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek, mockUsers.emily],
  },
  {
    archiveStatus: "unarchived",
    type: "self",
    title: "My very own chat",
    lastMessage: {
      dateCreated: "2023-07-21T19:08:03+00:00",
      message: "Hey dude",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek],
  },
  {
    archiveStatus: "unarchived",
    type: "group",
    title: "Group chat",
    lastMessage: {
      dateCreated: "2023-06-21T19:08:03+00:00",
      message: "It's me again",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek, mockUsers.emily],
  },
  {
    archiveStatus: "unarchived",
    type: "self",
    title: "My very own chat",
    lastMessage: {
      dateCreated: "2023-07-21T19:08:03+00:00",
      message: "Hey dude",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek],
  },
  {
    archiveStatus: "unarchived",
    type: "group",
    title: "Group chat",
    lastMessage: {
      dateCreated: "2023-06-21T19:08:03+00:00",
      message: "It's me again",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek, mockUsers.emily],
  },
  {
    archiveStatus: "unarchived",
    type: "self",
    title: "My very own chat",
    lastMessage: {
      dateCreated: "2023-07-21T19:08:03+00:00",
      message: "Hey dude",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek],
  },
  {
    archiveStatus: "unarchived",
    type: "group",
    title: "Group chat",
    lastMessage: {
      dateCreated: "2023-06-21T19:08:03+00:00",
      message: "It's me again",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek, mockUsers.emily],
  },
  {
    archiveStatus: "unarchived",
    type: "self",
    title: "My very own chat",
    lastMessage: {
      dateCreated: "2023-07-21T19:08:03+00:00",
      message: "Hey dude",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek],
  },
  {
    archiveStatus: "unarchived",
    type: "group",
    title: "Group chat",
    lastMessage: {
      dateCreated: "2023-06-21T19:08:03+00:00",
      message: "It's me again",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek, mockUsers.emily],
  },
  {
    archiveStatus: "unarchived",
    type: "self",
    title: "My very own chat",
    lastMessage: {
      dateCreated: "2023-07-21T19:08:03+00:00",
      message: "Hey dude",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek],
  },
  {
    archiveStatus: "unarchived",
    type: "group",
    title: "Group chat",
    lastMessage: {
      dateCreated: "2023-06-21T19:08:03+00:00",
      message: "It's me again",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek, mockUsers.emily],
  },
];
