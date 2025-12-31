
import { useState } from "react";

function BookForm() {


  return (

    <div className="px-10 py-6">
      <div className="grid grid-cols-5 gap-6 items-end">
        <div>
          <label className="block text-sm mb-1">Book Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Godan"
            />
        </div>

        <div>
          <label className="block text-sm mb-1">Book Title</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Written by premchand"
            />
        </div>

        <div>
          <label className="block text-sm mb-1">Author</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Munsipremchand"
            />
        </div>

        <div>
          <label className="block text-sm mb-1">Selling Price</label>
          <input
            type="number"
            className="w-full border rounded-md px-3 py-2"
            placeholder="1240"
            />
        </div>

        <div>
          <label className="block text-sm mb-1">Publish Date</label>
          <input
            type="date"
            className="w-full border rounded-md px-3 py-2"
            />
        </div>
      </div>

      <div className="mt-6 text-right">
        <button className="bg-gray-700 text-white px-6 py-2 rounded-md">
          SUBMIT
        </button>
      </div>
    </div>

  );
}

export default BookForm;
