import { Request, Response } from "express";

const http = require("http");

const server = http.createServer((req: Request, res: Response) => {
  const url = req.url;
  if (url == "/") {
    res.write("<html><body><h1>Hello</h1></body></html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
});

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000/");
});
