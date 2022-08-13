import client from "../_lib/client";
import {
  GetCurrentReportDocument,
  GetCurrentReportQuery,
  GetCurrentReportQueryVariables,
  SendMessageAndCloseKeyboardDocument,
  SendMessageAndCloseKeyboardQuery,
  SendMessageAndCloseKeyboardQueryVariables,
  UpdateLocationDocument,
  UpdateLocationMutation,
  UpdateLocationMutationVariables,
} from "../../../generated/graphql";

import { Message } from "typegram";

type Input = {
  message: Message.LocationMessage;
  t_user_id: string;
  update_id: string;
  chat_id: string;
};

export default async function askForLocationFlow({
  message,
  t_user_id,
  update_id: t_update_id,
  chat_id,
}: Input) {
  const latestReport = await client
    .query<GetCurrentReportQuery, GetCurrentReportQueryVariables>(
      GetCurrentReportDocument,
      {
        t_user_id,
      }
    )
    .toPromise();

  const t_message_id = latestReport.data?.report[0].t_message_id;

  await client
    .mutation<UpdateLocationMutation, UpdateLocationMutationVariables>(
      UpdateLocationDocument,
      {
        t_message_id,
        t_user_id,
        t_update_id,
        location: {
          type: "Point",
          coordinates: [message.location.latitude, message.location.longitude],
        },
      }
    )
    .toPromise();

  await client
    .query<
      SendMessageAndCloseKeyboardQuery,
      SendMessageAndCloseKeyboardQueryVariables
    >(SendMessageAndCloseKeyboardDocument, {
      chat_id,
      message: "Thanks! We are on it!",
    })
    .toPromise();
}
