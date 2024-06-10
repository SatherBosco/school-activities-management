import { NextApiRequest, NextApiResponse } from "next";
import { Provas } from "./models/provas";
import { connectDB } from "./utils/connectDB";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const charts = await Provas.find({});
        res.status(200).json(charts);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const chart = await Provas.create(req.body);
        res.status(201).json({ success: true, data: chart });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
