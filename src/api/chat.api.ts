import { BasicChatFields } from "../models/models.ts";
import { RecursivePartial } from "../type-helpers.ts";

export async function getChats(): Promise<RecursivePartial<BasicChatFields>[]> {
  // call GQL API and return chats
  // hard-mocked for now (easy mocks with RecursivePartial)

  return [];
}

const mockChatFields: RecursivePartial<BasicChatFields>[] = [];
