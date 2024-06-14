import React, {
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Instance } from "../utils/Axios";
import { userContext } from "./context/Authuser";

const App = () => {
  const [books, setbooks] = useState(null);
  const [loggedUser, setloggedUser] = useContext(userContext);

  const getBooks = async () => {
    try {
      const { data } = await Instance.get("/books");
      setbooks(data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <Navbar loggedUser={loggedUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={<Books books={books} loggedUser={loggedUser} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
