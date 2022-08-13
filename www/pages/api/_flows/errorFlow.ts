import client from "../_lib/client";
import {
  SendMessageAndCloseKeyboardDocument,
  SendMessageAndCloseKeyboardQuery,
  SendMessageAndCloseKeyboardQueryVariables,
} from "../../../generated/graphql";

type Input = {
  chat_id: string;
};

export default async function errorFlow({ chat_id }: Input) {
  await client
    .query<
      SendMessageAndCloseKeyboardQuery,
      SendMessageAndCloseKeyboardQueryVariables
    >(SendMessageAndCloseKeyboardDocument, {
      chat_id,
      message:
        "I'm sorry, please provide a description of the issue e.g. `/report Trash can is overflowing.`",
    })
    .toPromise();
}
