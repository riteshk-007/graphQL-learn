const todoSchema = `#graphql

scalar Date

type ResponseType {
    message: String
    status: Int
    
}

type Todo {
  id: ID!
  todo: String
  completed: Boolean
  createdAt: Date
}

type Query {
    getTodos: [Todo]
    getTodoById(id:ID): Todo
}
type Mutation {
    createTodo(todo:String): Todo
    updateTodo(id:ID!, todo:String): ResponseType
    deleteTodoById(id:ID): ResponseType
}

`;

export default todoSchema;
