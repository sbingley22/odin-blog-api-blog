import Button from "react-bootstrap/Button"
import { useState } from "react"

export default function Header() {
  const [isDark, setIsDark] = useState(true)
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.setAttribute("data-bs-theme",
    isDark ? "dark" : "light")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>Seans Blog</h3>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <a href={window.location.origin + "/blogs"}>
            <h4>Blogs</h4>
          </a>
        </div>
        <div className="col-md-4 d-flex justify-content-end align-items-center">
          <Button variant="secondary" onClick={toggleTheme}>{isDark ? "Light" : "Dark"}</Button>
        </div>
      </div>
    </div>
  )
}