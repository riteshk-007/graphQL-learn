export interface getTodos {
  __typename: string;
  id: string;
  todo: string;
  completed: boolean;
  createdAt: Date;
}

export type TodoTypes = {
  getTodos: Array<getTodos>;
};
