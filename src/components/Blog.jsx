import { useState } from "react"
import Header from "./Header"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

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
    <div>
      <Header />
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
      <div>
        {showCommentForm ? 
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
        :
          <Button variant="primary" onClick={()=>(setShowCommentForm(!showCommentForm))} >Add Comment</Button>
        }
      </div>
      <div>
        {comments.map( (comment) => (
          <div key={comment.url}>
            <h5>{comment.name}</h5>
            <h6>{comment.date}</h6>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
