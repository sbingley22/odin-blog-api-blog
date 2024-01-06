import { useState, useEffect } from "react"
import Header from "./Header"
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const serverUrl = import.meta.env.VITE_API_URL.slice(0,-1)
console.log(serverUrl)
export default function Blogs() {
  const [blogs, setBlogs] = useState([])

  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${serverUrl}${location.pathname}`;
        const response = await fetch(url);
        const jsonData = await response.json()
        setBlogs(jsonData)
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
          <div key={blog._id} className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <Link to={blog.url} className="text-decoration-none">
                  <h5 className="card-title">{blog.title}</h5>
                </Link>
                <p className="card-text">{blog.content.slice(0,200)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
