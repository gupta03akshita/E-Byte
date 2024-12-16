import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, Form } from 'react-bootstrap';

// Example Worker Todo List
const WorkerTodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [status, setStatus] = useState('');
  const [cashback, setCashback] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Fetch tasks for worker on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/worker/getTask', {
          method: 'POST',
          credentials: 'include', // Ensures cookies are sent with the request
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        if (data?.success) {
          console.log(data)
          setTasks(data?.tasks);
        } else {
          alert('Error fetching tasks');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Update Task Status
  const handleUpdateTask = async (taskId) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/worker/update-task', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId,
          status,
          cashback: +cashback, // Convert to number
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Task status updated successfully');
        setTasks(tasks.map((task) => (task._id === taskId ? { ...task, status } : task)));
      } else {
        alert('Error updating task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Submit Feedback
  const handleSubmitFeedback = async (taskId) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/worker/submit-feedback', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId,
          feedback,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Feedback submitted successfully');
        setFeedback(''); // Clear feedback input after submission
      } else {
        alert('Error submitting feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Worker To-Do List</h2>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <ListGroup>
          {tasks?.map((task) => (
            <Card className="mb-3" key={task._id}>
              <Card.Header>
                <strong>Task ID:</strong> {task._id}
              </Card.Header>
              <Card.Body>
                {/* <Card.Title>{task?.title}</Card.Title>
                <Card.Text>{task?.description}</Card.Text> */}
                <Card.Text>
                  <strong>Assigned by:</strong> {task?.user?.name} <br />
                  <strong>Email:</strong> {task?.user?.email} <br />
                  <strong>Phone:</strong> {task?.user?.phoneNumber}
                </Card.Text>

                <Form.Group className="mb-3">
                  <Form.Label>Update Task Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Cashback Earned</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter cashback amount"
                    value={cashback}
                    onChange={(e) => setCashback(e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={() => handleUpdateTask(task._id)}
                >
                  Update Task
                </Button>

                <hr />

                <Form.Group className="mb-3">
                  <Form.Label>Feedback</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  onClick={() => handleSubmitFeedback(task._id)}
                >
                  Submit Feedback
                </Button>
              </Card.Body>
            </Card>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default WorkerTodoList;
