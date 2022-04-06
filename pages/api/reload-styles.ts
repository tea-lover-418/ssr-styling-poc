// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getGlobalsFresh } from "../../shared/get-globals";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let success = true;
  try {
    getGlobalsFresh();
  } catch (_e) {
    success = false;
  }

  res.status(200).json({ success });
}
