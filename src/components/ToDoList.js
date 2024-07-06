import TaskColumn from "./TaskColumn";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DropToDelete from "./DropToDelete";

const ToDoList = ({ todos: initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState("");

  const updateTodoStatus = (draggedTodoId, droppedColumnTitle) => {
    const statusByColumn = {
      "To do": "to-do",
      "In progress": "in-progress",
      Done: "done",
    };

    setTodos(
      todos.map((todo) => {
        if (todo.id === draggedTodoId) {
          return {
            ...todo,
            status: statusByColumn[droppedColumnTitle],
          };
        } else {
          return todo;
        }
      })
    );
  };

  const deleteTodo = (draggedTodoId) => {
    setTodos(todos.filter((todo) => todo.id !== draggedTodoId));
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      // if user dropped the task outside any droppable area, return
      return;
    }
    const draggedTodoId = active.id;
    const droppedAreaId = over.id;
    console.log(draggedTodoId);
    console.log(droppedAreaId);

    if (droppedAreaId === "delete-task-area") {
      deleteTodo(active.id);
    } else {
      updateTodoStatus(draggedTodoId, droppedAreaId);
    }
  };

  const dumkey = uuidv4();
  const handleAddTodo = (e) => {
    e.preventDefault();

    // add the todo
    setTodos([
      ...todos,
      {
        id: dumkey,
        text: newTodoText,
        status: "to-do",
      },
    ]);
    // clear the input
    setNewTodoText("");
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <h2 style={{ marginLeft: "10px" }}>To do list</h2>
      <form
        onSubmit={handleAddTodo}
        style={{ margin: "10px", display: "flex", gap: "10px" }}
      >
        <input
          type="text"
          name="newTodoText"
          placeholder="type in your todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TaskColumn
          title="To do"
          todos={todos.filter((t) => t.status === "to-do")}
        />
        <TaskColumn
          title="In progress"
          todos={todos.filter((t) => t.status === "in-progress")}
        />
        <TaskColumn
          title="Done"
          todos={todos.filter((t) => t.status === "done")}
        />
      </div>
      <DropToDelete/>
    </DndContext>
  );
};

export default ToDoList;