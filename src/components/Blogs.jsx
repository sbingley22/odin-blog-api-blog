import Button from "react-bootstrap/Button"
import { useState } from "react"

export default function Blogs() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.setAttribute("data-bs-theme",
    isDark ? "dark" : "light")
  }

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
      <div>
        <h3>Seans Blog</h3>
        <Button variant="secondary" onClick={toggleTheme}>{isDark ? "Light" : "Dark"}</Button>
      </div>
      
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
