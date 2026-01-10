function BookTable({ books, fetchBooks, setEditingBook }) {
  const deleteBook = async (id) => {
    await fetch(`https://book-store-qafs.onrender.com/api/books/${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };

  return (
    <div className="max-w-7xl mx-auto px-10 mt-10">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">

        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">Book Name</th>
              <th className="px-4 py-3 text-left">Book Title</th>
              <th className="px-4 py-3 text-left">Author</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Publish Date</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  No books found
                </td>
              </tr>
            ) : (
              books.map((book) => (
                <tr key={book._id} className="border-t">
                  <td className="px-4 py-3">{book.bookName}</td>
                  <td className="px-4 py-3">{book.bookTitle}</td>
                  <td className="px-4 py-3">{book.author}</td>
                  <td className="px-4 py-3">{book.sellingPrice}</td>
                  <td className="px-4 py-3">
                    {new Date(book.publishDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      onClick={() => deleteBook(book._id)}
                      className="px-3 py-1 bg-red-100 text-red-600 rounded"
                    >
                      🗑
                    </button>
                    <button
                      onClick={() => setEditingBook(book)}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded"
                    >
                      ✏
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default BookTable;
