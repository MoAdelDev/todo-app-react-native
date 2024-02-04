import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    title: "",
    description: "",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    completeTodo: (state, action) => {
      const itemIndex = state.todos.findIndex(
        (item) => item.id == action.payload.id
      );
      if (action.payload.isComplete) {
        state.todos[itemIndex].isCompleted = true;
      } else {
        state.todos[itemIndex].isCompleted = false;
      }
    },
    deleteTodo: (state, action) => {
      const itemIndex = state.todos.findIndex(
        (item) => item.id == action.payload
      );
      state.todos.splice(itemIndex, 1);
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});
