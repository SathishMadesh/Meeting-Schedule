import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName, updateEmail } from './Redux/data/actions';

function TimeAvailability({ selectedDate, setSelectedTime }) {
  const [selectedTiming, setSelectedTiming] = useState(null);
  const [showEnterDetails, setShowEnterDetails] = useState(false);
  const [showTimeAvailability, setShowTimeAvailability] = useState(true); // Added state for controlling the visibility

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    dispatch(updateName(name));
    dispatch(updateEmail(email));
    setShowEnterDetails(false);
    setShowTimeAvailability(false); // Hide TimeAvailability
    e.preventDefault();
  };

  if (!selectedDate || !showTimeAvailability) {
    return null; // Return null if either selectedDate is falsy or showTimeAvailability is false
  }

  const formattedDate = selectedDate.format('dddd, MMMM D');

  const timings = [
    "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00"
  ];

  const handleButtonClick = (time) => {
    setSelectedTiming(time);
  };

  const handleNextButtonClick = (e) => {
    if (selectedTiming) {
      setSelectedTime(selectedTiming);
      setShowEnterDetails(true);
    }
  };

  return (
    <div className="flex flex-col ml-5">
      <h2 className="font-semibold">{formattedDate}</h2>
      {timings.map((time, index) => (
        <div key={index} className="relative">
          <button
            className={`text-blue-500 border border-blue-500 px-4 py-2 rounded-lg mt-2 mr-6 hover:bg-blue-500 hover:text-white ${selectedTiming === time ? 'w-16' : 'w-32'}`}
            style={{ backgroundColor: selectedTiming === time ? 'gray' : 'white', borderColor: selectedTiming === time ? 'gray' : 'blue', color: selectedTiming === time ? 'white' : 'blue' }}
            onClick={() => handleButtonClick(time)}
          >
            {time}
          </button>
          {selectedTiming === time &&
            <button className="absolute right-5 top-2 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleNextButtonClick}>Next</button>
          }
        </div>
      ))}
      {showEnterDetails && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Enter Details</h2>
            <form onSubmit={handleSubmit}>
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
      )}
    </div>
  );
}

export default TimeAvailability;
