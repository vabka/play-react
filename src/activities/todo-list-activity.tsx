import { useStore } from "effector-react";
import { $todo, addingItem, itemCompleted, itemRemoved } from "../models/todo";
import { TodoList } from "../components";

const TodoListActivity = () => {
  const store = useStore($todo);
  return (
    <TodoList
      items={store.items}
      onAdd={addingItem}
      onComplete={itemCompleted}
      onRemove={itemRemoved}
    />
  );
};
export default TodoListActivity;
