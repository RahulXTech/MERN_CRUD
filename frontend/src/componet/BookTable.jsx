function BookTable() {
  return (
    <div className="px-10 mt-10">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="text-left px-4 py-3">BOOK NAME</th>
            <th className="text-left px-4 py-3">BOOK TITLE</th>
            <th className="text-left px-4 py-3">AUTHOR</th>
            <th className="text-left px-4 py-3">SELLING PRICE</th>
            <th className="text-left px-4 py-3">PUBLISH DATE</th>
            <th className="text-left px-4 py-3">ACTION</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          <tr className="border-b">
            <td className="px-4 py-4">Godan</td>
            <td className="px-4 py-4">Book written by munsipremchand</td>
            <td className="px-4 py-4">Premchand</td>
            <td className="px-4 py-4">420</td>
            <td className="px-4 py-4">1936</td>
            <td className="px-4 py-4 flex gap-3">
              <button className="bg-red-100 text-red-600 px-3 py-1 rounded">
                🗑
              </button>
              <button className="bg-green-100 text-green-600 px-3 py-1 rounded">
                ✏
              </button>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4">Ikigai</td>
            <td className="px-4 py-4">
              The Japanese secret to a long and happy life
            </td>
            <td className="px-4 py-4">Francesc Miralles</td>
            <td className="px-4 py-4">799</td>
            <td className="px-4 py-4">2024-10-10</td>
            <td className="px-4 py-4 flex gap-3">
              <button className="bg-red-100 text-red-600 px-3 py-1 rounded">
                🗑
              </button>
              <button className="bg-green-100 text-green-600 px-3 py-1 rounded">
                ✏
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
