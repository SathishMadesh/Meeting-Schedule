// EnterDetails.js
import React from 'react';

function EnterDetails() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Enter Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email ID:</label>
            <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">Schedule Event</button>
        </form>
      </div>
    </div>
  );
}

export default EnterDetails;
