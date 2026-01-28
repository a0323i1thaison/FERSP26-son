import React, { useState } from 'react';
import { Table, Button, Container, Row, Col, Card, Badge } from 'react-bootstrap';
import ListOfUsers from '../ListOfUsers';

function ManageUsers() {
  const [users, setUsers] = useState(ListOfUsers);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleLock = (id) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id
          ? { ...user, status: user.status === 'Active' ? 'Locked' : 'Active' }
          : user
      )
    );
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col>
          <Card className="shadow">
            <Card.Header>
              <h4>Manage Users</h4>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Username</th>
                    <th>Status</th>
                    <th>Password</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>
                        <img
                          src={user.avatar}
                          alt="Avatar"
                          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                        />
                      </td>
                      <td>{user.username}</td>
                      <td>
                        <Badge bg={user.status === 'Active' ? 'success' : user.status === 'Locked' ? 'danger' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </td>
                      <td>{'*'.repeat(user.password.length)}</td>
                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEdit(user.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleLock(user.id)}
                        >
                          {user.status === 'Active' ? 'Lock' : 'Unlock'}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ManageUsers;