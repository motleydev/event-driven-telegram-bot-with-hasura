import client from "../_lib/client";
import {
  SendMessageAndCloseKeyboardDocument,
  SendMessageAndCloseKeyboardQuery,
  SendMessageAndCloseKeyboardQueryVariables,
} from "../../../generated/graphql";

type Input = {
  chat_id: string;
};

export default async function thanksFlow({ chat_id }: Input) {
  await client
    .query<
      SendMessageAndCloseKeyboardQuery,
      SendMessageAndCloseKeyboardQueryVariables
    >(SendMessageAndCloseKeyboardDocument, {
      chat_id,
      message: "Awe! We love you, too!",
    })
    .toPromise();
}
