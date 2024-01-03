import { useState, useEffect } from "react"
import Header from "./Header"

export default function Blogs() {
  const blogs1 = [
    {
      url: "/blogs/fake",
      title: "Fake Blog",
      content: "My fake blog post"
    },
    {
      url: "/blogs/fake3",
      title: "Fake Blog3",
      content: "My fake blog post3"
    }
  ]
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/blogs')
        const jsonData = await response.json()
        setBlogs(jsonData)
        console.log(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

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
