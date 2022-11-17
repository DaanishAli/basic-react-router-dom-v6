
import { Routes, Route, Link, NavLink, } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import Booklist from "./Booklist";
import Newbook from "./Newbook";
import Booklayout from "./Booklayout";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/" style={({ isActive }) =>
            isActive ? { color: "red" } : undefined

          }>Home</NavLink> </li>
          <li><NavLink to="books"
            style={({ isActive }) =>
              isActive ? { color: "red" } : undefined

            }>Booklist</NavLink> </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books" element={<Booklayout />}>
          <Route index element={<Booklist />} />
          <Route path=":id" element={<Books />} />
          <Route path="new" element={<Newbook />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </>

  );
}

export default App;
