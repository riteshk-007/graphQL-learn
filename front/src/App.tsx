import { useState, FormEvent } from "react";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ todo, completed });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
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
      </div>
    </div>
  );
};

export default App;
