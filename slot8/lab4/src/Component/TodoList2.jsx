import React, { useReducer, useState } from "react";
import { Container, Button, Form, ListGroup } from "react-bootstrap";

// 1. Initial State (mảng object)
const initialState = [];

// 2. Reducer
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload
        }
      ];

    case "DELETE_TASK":
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}

function TodoList2() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: task });
      setTask("");
    }
  };

  return (
    <Container className="mt-4">
      <h3>Exercise 4: Todo List</h3>

      <Form.Control
        placeholder="Please input a Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <Button className="mt-2" onClick={addTodo}>
        Add Todo
      </Button>

      <ListGroup className="mt-3">
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
          >
            {todo.text}
            <Button
              variant="danger"
              size="sm"
              onClick={() =>
                dispatch({
                  type: "DELETE_TASK",
                  payload: todo.id
                })
              }
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TodoList2;
