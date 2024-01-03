import { useState } from "react"
import Header from "./Header"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Blog() {
  const blog = {
    url: "/blogs/fake",
    title: "Fake Blog",
    content: "My fake blog post"
  }
  const comments = [
    {
      blog: "blogId",
      url: "aaaa",
      name: "Jose Semedo",
      date: "22/12/23",
      content: "Im a footballer"
    },
    {
      blog: "blogId2",
      url: "bbbb",
      name: "Bob",
      date: "24/12/23",
      content: "No you're not!"
    }
  ]

  const [showCommentForm, setShowCommentForm] = useState(false)

  return (
    <Container>
      <Header />
      <Row className="mt-3">
        <Col>
          <h1>{blog.title}</h1>
          <p className="text-start text-lg font-size-lg">{blog.content}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {showCommentForm ? (
            <Card>
              <Card.Body>
                <Form action={blog.url + "/comments"} method="POST">
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
            <Card key={comment.url} className="mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{comment.name}</h5>
                  </div>
                  <div className="text-muted">
                    <h6>{comment.date}</h6>
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
