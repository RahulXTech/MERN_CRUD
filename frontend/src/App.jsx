import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/api/books");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <BookForm
        fetchBooks={fetchBooks}
        editingBook={editingBook}
        setEditingBook={setEditingBook}
      />
      <BookTable
        books={books}
        fetchBooks={fetchBooks}
        setEditingBook={setEditingBook}
      />
    </>
  );
}

export default App;
