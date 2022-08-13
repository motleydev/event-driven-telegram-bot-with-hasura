import client from "../_lib/client";
import {
  CreateReportDocument,
  CreateReportMutation,
  CreateReportMutationVariables,
  SendMessageAndCloseKeyboardDocument,
  SendMessageAndCloseKeyboardQuery,
  SendMessageAndCloseKeyboardQueryVariables,
} from "../../../generated/graphql";

type Input = {
  input: string;
  name: string;
  t_user_id: string;
  message_id: string;
  update_id: string;
  chat_id: string;
};

export default async function reportFlow({
  input: message,
  name,
  t_user_id,
  message_id: t_message_id,
  update_id: t_update_id,
  chat_id,
}: Input) {
  await client
    .mutation<CreateReportMutation, CreateReportMutationVariables>(
      CreateReportDocument,
      {
        message,
        name,
        t_user_id,
        t_message_id,
        t_update_id,
      }
    )
    .toPromise();
  await client
    .query<
      SendMessageAndCloseKeyboardQuery,
      SendMessageAndCloseKeyboardQueryVariables
    >(SendMessageAndCloseKeyboardDocument, {
      chat_id,
      message:
        "Please add a photo. Note, only the last one you send will be saved.",
    })
    .toPromise();
}
