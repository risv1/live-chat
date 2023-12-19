import { Request, Response } from "express";

export const HelloWorld = (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
}