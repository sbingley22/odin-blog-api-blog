import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-bs-theme", isDark ? "dark" : "light");
  };

  return (
    <Navbar className="mb-4 mt-0 px-5">
      <Container>
        <Link to={window.location.origin + "/blogs"} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>Seans Blog</h3>
        </Link>
        <Nav className="justify-content-end">
          <Button variant="secondary" onClick={toggleTheme}>
            {isDark ? "Light" : "Dark"}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
