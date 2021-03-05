import { TodoItem } from "../../models/todo";
import {
  AddItem,
  CompleteItem,
  Container,
  Item as ItemElement,
  ItemsList,
  RemoveItem,
} from "./styles";

interface Props {
  items: TodoItem[];
  onComplete: (item: TodoItem) => void;
  onRemove: (item: TodoItem) => void;
  onAdd: (name: string) => void;
}

const TodoList = ({
  items,
  onComplete: complete,
  onRemove: remove,
  onAdd,
}: Props) => (
  <Container>
    <ItemsList>
      {items.map((item) => (
        <li key={item.id}>
          <ItemElement className={item.completed ? "completed" : undefined}>
            {item.name}
          </ItemElement>
          {!item.completed && (
            <CompleteItem onClick={() => complete(item)}>complete</CompleteItem>
          )}
          <RemoveItem onClick={() => remove(item)}>remove</RemoveItem>
        </li>
      ))}
    </ItemsList>
    <AddItem
      onClick={() => {
        const name = prompt("Name of task");
        if (name) onAdd(name);
      }}
    >
      ADD
    </AddItem>
  </Container>
);
export default TodoList;
