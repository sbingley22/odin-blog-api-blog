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
      content: "My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2My fake blog post2"
    },
    {
      url: "/blogs/fake3",
      title: "Fake Blog3",
      content: "My fake blog post3"
    },
    {
      url: "/blogs/fake5",
      title: "Fake Blog5",
      content: "My fake blog post5"
    }
  ]

  return (
    <div>
      <Header />
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.url} className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <a href={blog.url} className="text-decoration-none">
                  <h5 className="card-title">{blog.title}</h5>
                </a>
                <p className="card-text">{blog.content.slice(0,200)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
