import { createDomain } from "effector";
import { attachLogger } from "effector-logger/attach";
export interface TodoItem {
  id: string;
  name: string;
  completed: boolean;
}

const todoDomain = createDomain("todo-domain");
attachLogger(todoDomain, {
  reduxDevtools: "enabled",
  console: "enabled",
});
export const addingItem = todoDomain.createEvent<string>("add-item");
export const itemCompleted = todoDomain.createEvent<TodoItem>("complete-item");
export const itemRemoved = todoDomain.createEvent<TodoItem>("remove-item");
export const $todo = todoDomain
  .createStore<{ lastId: number; items: Array<TodoItem> }>(
    {
      lastId: 0,
      items: [],
    },
    { name: "todo-store" }
  )
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
