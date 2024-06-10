// crud api users in next js
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "./models/user";
import { connectDB } from "./utils/connectDB";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
