import React from 'react';

function Container1({ selectDate, today, currentDate, setToday, generateDate, days, months, setSelectDate, selectedTime }) {
  console.log(selectedTime)
  return (
    <div className="container1 h-96 w-full lg:w-96 px-5 flex-col">
      <div className="border-b-2 p-4 grid place-content-center">
        <img src="logo.png" className="w-20 h-20" alt="Logo" />
      </div>
      <div className="p-4 grid place-content-center">
        <h1 className="font-semibold">Schedule for {selectDate ? selectDate.toDate().toDateString() : 'Select a date'}</h1>
        {selectedTime && (
          <p>Meeting Time: {selectedTime}</p>
        )}
        <p>Book a meeting with our Scheduler.</p>
      </div>
    </div>
  );
}

export default Container1;
