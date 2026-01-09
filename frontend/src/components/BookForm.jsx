import { useEffect, useState } from "react";

function BookForm({ fetchBooks, editingBook, setEditingBook }) {
  const [formData, setFormData] = useState({
    bookName: "",
    bookTitle: "",
    author: "",
    sellingPrice: "",
    publishDate: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (editingBook) {
      setFormData({
        bookName: editingBook.bookName,
        bookTitle: editingBook.bookTitle,
        author: editingBook.author,
        sellingPrice: editingBook.sellingPrice,
        publishDate: editingBook.publishDate.slice(0, 10),
      });
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingBook) {
      await fetch(
        `http://localhost:5000/api/books/${editingBook._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setEditingBook(null);
    } else {
      await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }

    fetchBooks();
    setFormData({
      bookName: "",
      bookTitle: "",
      author: "",
      sellingPrice: "",
      publishDate: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-10 mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 border border-gray-100"
      >
        {/* Title */}
        <h2 className="text-lg font-semibold text-indigo-700 mb-6">
          {editingBook ? "Edit Book" : "Add New Book"}
        </h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Book Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Book Name
            </label>
            <input
              name="bookName"
              value={formData.bookName}
              onChange={handleChange}
              placeholder="Godan"
              className="w-full border rounded-md px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Book Title */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Book Title
            </label>
            <input
              name="bookTitle"
              value={formData.bookTitle}
              onChange={handleChange}
              placeholder="Written by Premchand"
              className="w-full border rounded-md px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Author
            </label>
            <input
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Munshi Premchand"
              className="w-full border rounded-md px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Selling Price
            </label>
            <input
              type="number"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              placeholder="499"
              className="w-full border rounded-md px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Publish Date */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Publish Date
            </label>
            <input
              type="date"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-4">
          {editingBook && (
            <button
              type="button"
              onClick={() => {
                setEditingBook(null);
                setFormData({
                  bookName: "",
                  bookTitle: "",
                  author: "",
                  sellingPrice: "",
                  publishDate: "",
                });
              }}
              className="px-5 py-2 rounded-md text-sm border
                         border-gray-300 text-gray-600
                         hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          )}

          <button
            className="px-6 py-2 rounded-md text-sm font-medium text-white
                       bg-indigo-700 hover:bg-indigo-800
                       transition duration-300"
          >
            {editingBook ? "UPDATE BOOK" : "ADD BOOK"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
