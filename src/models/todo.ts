import { createDomain } from "effector";
export interface TodoItem {
  id: string;
  name: string;
  completed: boolean;
}

const todoDomain = createDomain("todo-domain");
export const addingItem = todoDomain.createEvent<string>();
export const itemCompleted = todoDomain.createEvent<TodoItem>();
export const itemRemoved = todoDomain.createEvent<TodoItem>();
export const $todo = todoDomain
  .createStore<{ lastId: number; items: Array<TodoItem> }>({
    lastId: 0,
    items: [],
  })
  .on(addingItem, ({ lastId, items }, payload) => ({
    lastId: lastId + 1,
    items: [
      ...items,
      {
        id: (lastId + 1).toString(),
        name: payload,
        completed: false,
      },
    ],
  }))
  .on(itemRemoved, ({ items, lastId }, payload) => ({
    lastId,
    items: items.filter((x) => x !== payload),
  }))
  .on(itemCompleted, ({ lastId, items }, payload) => ({
    lastId,
    items: items.map((item) =>
      item === payload
        ? { id: item.id, name: item.name, completed: true }
        : item
    ),
  }));
