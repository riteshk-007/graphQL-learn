import { ApolloServer } from "@apollo/server";
import todoSchema from "../models/todo/todoSchema.js";
import todoResolver from "../models/todo/todoResolver.js";
const apolloServer = new ApolloServer({
    typeDefs: todoSchema,
    resolvers: todoResolver,
});
export default apolloServer;
