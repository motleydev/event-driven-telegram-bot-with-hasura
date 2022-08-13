import type { NextApiRequest, NextApiResponse } from "next";

import reportFlow from "./_flows/reportFlow";
import statusFlow from "./_flows/statusFlow";
import thanksFlow from "./_flows/thanksFlow";
import errorFlow from "./_flows/errorFlow";
import askForPhotoFlow from "./_flows/askForPhotoFlow";
import askForLocationFlow from "./_flows/askForLocationFlow";
import hasKey from "./_lib/hasKey";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message, update_id } = req.body;
  const { message_id, text } = message;
  const { chat, from } = message;
  const t_user_id = from.id + "";
  const name = from.first_name + " " + from.last_name;
  const chat_id = chat.id + "";

  if (hasKey("text", message)) {
    const [, command, input] = text.match(/(^\/[aA-zZ]+)(.+)/);

    switch (command) {
      case "/report":
        await reportFlow({
          input,
          name,
          t_user_id,
          message_id,
          update_id,
          chat_id,
        });
        break;

      case "/status":
        await statusFlow({ chat_id });
        break;

      case "/thanks":
        await thanksFlow({ chat_id });
        break;

      default:
        await errorFlow({ chat_id });
        break;
    }
  }

  // On Message/Photo
  if (hasKey("photo", message)) {
    await askForPhotoFlow({ message, t_user_id, update_id, chat_id });
  }

  // On Location
  if (hasKey("location", message)) {
    await askForLocationFlow({ message, t_user_id, update_id, chat_id });
  }
  res.status(200).json({ message: "updated" });
}
