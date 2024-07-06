import TaskColumn from "./TaskColumn";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DropToDelete from "./DropToDelete";
import './ToDoList.css';  

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

    if (droppedAreaId === "delete-task-area") {
      deleteTodo(active.id);
    } else {
      updateTodoStatus(draggedTodoId, droppedAreaId);
    }
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodoId = uuidv4();

    // add the todo
    setTodos([
      ...todos,
      {
        id: newTodoId,
        text: newTodoText,
        status: "to-do",
      },
    ]);
    // clear the input
    setNewTodoText("");
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="container my-5">
        <h2 className="text-center mb-4">To-Do List</h2>
        <form onSubmit={handleAddTodo} className="row g-3 justify-content-center mb-4">
          <div className="col-auto">
            <input
              type="text"
              name="newTodoText"
              placeholder="Type in your task"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              required
              aria-label="New Todo"
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-plus me-2"></i> Add Task
            </button>
          </div>
        </form>

        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <TaskColumn
              title="To do"
              todos={todos.filter((t) => t.status === "to-do")}
              className="task-column bg-light border border-warning"
            />
          </div>
          <div className="col-12 col-md-4">
            <TaskColumn
              title="In progress"
              todos={todos.filter((t) => t.status === "in-progress")}
              className="task-column bg-light border border-info"
            />
          </div>
          <div className="col-12 col-md-4">
            <TaskColumn
              title="Done"
              todos={todos.filter((t) => t.status === "done")}
              className="task-column bg-light border border-success"
            />
          </div>
        </div>

        <DropToDelete className="drop-to-delete mt-4 p-3 text-center bg-danger text-white rounded" />
      </div>
    </DndContext>
  );
};

export default ToDoList;
