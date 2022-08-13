import client from "../_lib/client";
import {
  AskForLocationDocument,
  AskForLocationQuery,
  AskForLocationQueryVariables,
  GetCurrentReportDocument,
  GetCurrentReportQuery,
  GetCurrentReportQueryVariables,
  GetPhotoDocument,
  GetPhotoQuery,
  GetPhotoQueryVariables,
  UpdateImageDocument,
  UpdateImageMutation,
  UpdateImageMutationVariables,
} from "../../../generated/graphql";

import { Message } from "typegram";

type Input = {
  message: Message.PhotoMessage;
  t_user_id: string;
  update_id: string;
  chat_id: string;
};

export default async function askForPhotoFlow({
  message,
  t_user_id,
  update_id: t_update_id,
  chat_id,
}: Input) {
  const { photo } = message;
  const largePhoto = photo[photo.length - 1];
  const photo_id = largePhoto.file_id;

  const latestReport = await client
    .query<GetCurrentReportQuery, GetCurrentReportQueryVariables>(
      GetCurrentReportDocument,
      {
        t_user_id,
      }
    )
    .toPromise();

  const t_message_id = latestReport.data?.report[0].t_message_id;

  const result = await client
    .query<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, {
      photo_id,
    })
    .toPromise();

  if (result.data) {
    const baseUrlPath = result.data.t_getPhoto?.result?.file_path;
    const baseUrlPathMatch = baseUrlPath
      ? baseUrlPath.match(/\/(file_\d{1,}\.\w{3}$)/)
      : "";
    const image_url = baseUrlPathMatch ? baseUrlPathMatch[0] : "";
    await client
      .mutation<UpdateImageMutation, UpdateImageMutationVariables>(
        UpdateImageDocument,
        {
          image_url,
          t_message_id,
          t_user_id,
          t_update_id,
        }
      )
      .toPromise();

    await client
      .query<AskForLocationQuery, AskForLocationQueryVariables>(
        AskForLocationDocument,
        {
          chat_id,
        }
      )
      .toPromise();
  }
}
