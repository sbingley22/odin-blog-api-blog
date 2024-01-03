import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-bs-theme", isDark ? "dark" : "light");
  };

  const navbarStyle = {
    backgroundColor: isDark ? "#e8e9ea" : "#343a40",
    borderRadius: "10px",
  }

  return (
    <Navbar style={navbarStyle} className="mb-4 mt-0 px-5">
      <Container>
        <Navbar.Brand href={window.location.origin + "/blogs"}>
          <h3>Seans Blog</h3>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Button variant="secondary" onClick={toggleTheme}>
            {isDark ? "Light" : "Dark"}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
