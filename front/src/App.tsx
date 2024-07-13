import { useMutation, useQuery } from "@apollo/client";
import { useState, FormEvent, useEffect } from "react";
import { CREATE_TODO, GET_TODOS } from "./queries/todoQuery";
import { getTodos, TodoTypes } from "./Types";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [todos, setTodos] = useState<Array<getTodos>>([]);

  const { data, loading, error } = useQuery<TodoTypes>(GET_TODOS);
  const [createTodo, { data: newTodo, loading: todoLoad, error: todoErr }] =
    useMutation(CREATE_TODO);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ todo, completed });
    createTodo({ variables: { todo: todo } });
    if (todoErr) alert("Error");
    console.log("new todo for handleSubmit", newTodo);
    // setTodos(newTodo?.createTodo, ...todos);
  };

  useEffect(() => {
    if (data?.getTodos) setTodos(data?.getTodos);
  }, [data]);

  useEffect(() => {
    console.log("new todo for useEffect", newTodo);
    if (newTodo && newTodo?.createTodo) {
      setTodos([newTodo.createTodo, ...todos]);
    }
  }, [newTodo]);

  // const handleToggle = (data: boolean, id: string) => {};
  return (
    <div className="flex justify-center items-center bg-blue-100">
      <div className="w-full max-w-md px-4 py-8 rounded-md bg-blue-300 shadow-md">
        <h2 className="text-xl font-bold text-center mb-6">Add Todo</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="todo"
              className="block text-sm font-medium text-gray-700"
            >
              Todo
            </label>
            <input
              type="text"
              id="todo"
              value={todo}
              required
              onChange={(e) => setTodo(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="What needs to be done?"
              disabled={todoLoad}
            />
          </div>
          <div className="flex items-center">
            <input
              id="completed"
              name="completed"
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="completed"
              className="ml-2 block text-sm text-gray-900"
            >
              Completed
            </label>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Todo
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-center mb-6">Todos</h2>
          {loading && <p>Loading...</p>}
          {error && <p>Error...</p>}
          {todos &&
            todos.map((todo, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-white p-4 rounded-md shadow-md mb-4"
              >
                <p>{todo.todo}</p>

                <div>
                  <span className="mr-2">
                    {todo.completed ? "Completed" : "pending"}
                  </span>
                  <input type="checkbox" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
