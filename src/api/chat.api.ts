import { ChatFields } from "../models/models.ts";

export async function getChats(): Promise<ChatFields> {
  // call GQL API and return chats
  // hard-mocked for now (easy mocks with RecursivePartial)

  return mockChatFields;
}

const mockUsers = {
  derek: { id: "foo", firstname: "Derek" },
};

const mockChatFields: ChatFields = [
  {
    type: "self",
    title: "My very own chat",
    lastMessage: {
      dateCreated: "2023-07-21T19:08:03+00:00",
      message: "Hey dude",
      sender: mockUsers.derek,
    },
    members: [mockUsers.derek],
  },
];
