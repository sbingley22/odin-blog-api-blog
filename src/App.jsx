import './App.css'
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <h1>Click Seans Blog in the nav bar to see the blogs.</h1>
      <p>This is just a quick site to demonstrate using rest api with react front end to generate a blog website.</p>
      <p>This front end has 2 components. The public site which anyone can view and leave comments and private developer site where the admin can create new blogs, delete old ones as well as delete comments, etc. Both sites use the same rest api backend</p>
    </>
  )
}

export default App