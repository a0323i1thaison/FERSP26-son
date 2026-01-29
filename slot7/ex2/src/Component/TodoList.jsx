import React, { useState } from "react";
import { Container, Button, Form, ListGroup } from "react-bootstrap";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-4">
      <h3>Exercise 4: Todo List</h3>

      <Form.Control
        placeholder="Please input a Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button className="mt-2" onClick={addTodo}>Add Todo</Button>

      <ListGroup className="mt-3">
        {todos.map((t, i) => (
          <ListGroup.Item key={i} className="d-flex justify-content-between">
            {t}
            <Button variant="danger" size="sm" onClick={() => deleteTodo(i)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TodoList;
