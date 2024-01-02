import Header from "./Header"

export default function Blogs() {

  const blogs = [
    {
      url: "/blogs/fake",
      title: "Fake Blog",
      content: "My fake blog post"
    },
    {
      url: "/blogs/fake2",
      title: "Fake Blog2",
      content: "My fake blog post2"
    }
  ]

  return (
    <div>
      <Header />
      {blogs.map( blog => (
        <div key={blog.url}>
          <a href={blog.url}>
            <h1>{blog.title}</h1>
          </a>
        </div>
      ))}
    </div>
  )
}
