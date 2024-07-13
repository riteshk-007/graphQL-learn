import express, { Application, Request, Response } from "express";
import "dotenv/config";
import apolloServer from "./config/apolloServer.js";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World", status: 200 });
});

const startApolloServer = async () => {
  await apolloServer.start();
  app.use("/graphql", expressMiddleware(apolloServer));
};

startApolloServer();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
