import express from "express";
import "dotenv/config";
import apolloServer from "./config/apolloServer.js";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
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
