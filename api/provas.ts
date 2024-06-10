import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "./utils/connectDB";
import { Provas } from "./models/provas";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const provas = await Provas.find({});
        res.status(200).json({ success: true, data: provas });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const prova = await Provas.create(req.body);

        res.status(201).json({ success: true, data: prova });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
