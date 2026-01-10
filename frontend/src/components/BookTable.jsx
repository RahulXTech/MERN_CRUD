import { BASE_URL } from "../config";
function BookTable({ books, fetchBooks, setEditingBook }) {
  const deleteBook = async (id) => {
    await fetch(`${BASE_URL}/api/books/${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };

  return (
    <div className="max-w-7xl mx-auto px-10 mt-10">
      <div className="bg-white shadow-md rounded-lg border border-gray-100 overflow-hidden">

        {/* Table Header */}
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-indigo-700">
            Book List
          </h2>
        </div>

        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Book Name</th>
              <th className="px-6 py-3 text-left">Book Title</th>
              <th className="px-6 py-3 text-left">Author</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Publish Date</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {books.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-10 text-gray-400"
                >
                  No books found. Please add a book.
                </td>
              </tr>
            ) : (
              books.map((book) => (
                <tr
                  key={book._id}
                  className="border-t hover:bg-indigo-50 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {book.bookName}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {book.bookTitle}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {book.author}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    ₹{book.sellingPrice}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(book.publishDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 flex gap-3">
                    {/* Delete */}
                    <button
                      onClick={() => deleteBook(book._id)}
                      className="px-3 py-1 rounded-md text-sm
                                 bg-red-50 text-red-600
                                 hover:bg-red-100 transition"
                      title="Delete Book"
                    >
                      🗑
                    </button>

                    {/* Edit */}
                    <button
                      onClick={() => setEditingBook(book)}
                      className="px-3 py-1 rounded-md text-sm
                                 bg-indigo-50 text-indigo-700
                                 hover:bg-indigo-100 transition"
                      title="Edit Book"
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