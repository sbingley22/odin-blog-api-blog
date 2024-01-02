
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
      url: "aaaa",
      name: "Bob",
      date: "24/12/23",
      content: "No you're not!"
    }
  ]
  return (
    <div>
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
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
