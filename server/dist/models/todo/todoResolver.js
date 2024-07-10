import prisma from "../../config/database.js";
const todoResolver = {
    Query: {
        getTodos: async () => await prisma.todo.findMany(),
        getTodoById: async (_, { id }) => await prisma.todo.findUnique({ where: { id } }),
    },
    Mutation: {
        createTodo: async (_, { todo }) => {
            const newTodo = await prisma.todo.create({
                data: {
                    todo: todo,
                    completed: false,
                },
            });
            return newTodo;
        },
        updateTodo: async (_, { id, todo }) => {
            await prisma.todo.update({
                where: { id },
                data: { todo },
            });
            return {
                message: "Todo updated successfully",
                status: 200,
            };
        },
        deleteTodoById: async (_, { id }) => {
            await prisma.todo.delete({ where: { id } });
            return {
                message: "Todo deleted successfully",
                status: 200,
            };
        },
    },
};
export default todoResolver;
