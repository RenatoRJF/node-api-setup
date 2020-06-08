import { Request, Response } from "express";

async function index(req: Request, res: Response) {
  return res.json({ _id: "asddasd", roomId: "231233123" });
}

export { index };
