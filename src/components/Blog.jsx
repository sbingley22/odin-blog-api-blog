import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import Header from "./Header"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const serverUrl = import.meta.env.VITE_API_URL

export default function Blog() {
  const [blog, setBlog] = useState()
  const [comments, setComments] = useState([])
  const [reload, setReload] = useState(false)

  const location = useLocation()
  const apiUrl = `${serverUrl}${location.pathname}`

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const url = apiUrl;
        const response = await fetch(url);
        const jsonData = await response.json()
        setBlog(jsonData.blog)
        setComments(jsonData.comments)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  },[])

  const [showCommentForm, setShowCommentForm] = useState(false)
  const [errors, setErrors] = useState([])

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const commentData = {
      name: event.target.elements.name.value,
      comment: event.target.elements.comment.value,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
  
      if (response.ok) {
        // Comment posted successfully, reload the page
        //window.location.reload(true);
        setReload(!reload)
      } else if (response.status == 400) {
        // Form data incorrect. Display errors to user
        const errorData = await response.json()
        const errors = errorData.details
        setErrors(errors.map(error => error.msg))
      } else {
        console.error('Failed to save comment.');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <Container>
      <Header />
      <Row className="mt-3">
        {blog && <Col>
          <h1>{blog.title}</h1>
          <p className="text-start text-lg font-size-lg">{blog.content}</p>
          <h6 className="text-end">{blog.date_formatted}</h6>
        </Col> }
      </Row>
      <Row className="mt-3">
        <Col>
          {showCommentForm ? (
            <Card>
              <Card.Body>
                <Form onSubmit={handleCommentSubmit} method="POST">
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" />
                  </Form.Group>
                  <Form.Group controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" name="comment" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
              { errors && errors.map( (error, index) => (
                <p key={index}>{error}</p>
              )) }
            </Card>
          ) : (
            <Button
              variant="primary"
              onClick={() => setShowCommentForm(!showCommentForm)}
            >
              Add Comment
            </Button>
          )}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {comments.map((comment) => (
            <Card key={comment._id} className="mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{comment.name}</h5>
                  </div>
                  <div className="text-muted">
                    <h6>{comment.date_formatted}</h6>
                  </div>
                </div>
                <p className="text-start">{comment.content}</p>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
