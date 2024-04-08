import dayjs from 'dayjs';
import './App.css';
import { generateDate } from "./util/calendar";
import cn from './util/cn';
import { useState } from 'react';
import { months } from './util/calendar';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

function TimeAvailability({ selectedDate }) {
  const [nextButtonIndex, setNextButtonIndex] = useState(-1);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(-1);

  if (!selectedDate) {
    return null;
  }

  const formattedDate = selectedDate.format('dddd, MMMM D');

  // Replace this mock data with your actual timing availability logic
  const timings = [
    "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00"
  ];

  const handleButtonClick = (index) => {
    setNextButtonIndex(index);
    setClickedButtonIndex(index); // Update clicked button index
  };

  return (
    <div className="flex flex-col ml-5">
      <h2 className="font-semibold">{formattedDate}</h2>
      {timings.map((time, index) => (
        <div key={index} className="relative">
          <button
            className={`text-blue-500 border border-blue-500 px-4 py-2 rounded-lg mt-2 mr-6 hover:bg-blue-500 hover:text-white ${nextButtonIndex === index ? 'w-16' : 'w-32'}`}
            style={{ backgroundColor: clickedButtonIndex === index ? 'gray' : 'white', borderColor: clickedButtonIndex === index ? 'gray' : 'blue', color: clickedButtonIndex === index ? 'white' : 'blue' }}
            onClick={() => handleButtonClick(index)}
          >
            {time}
            {nextButtonIndex === index &&
              <button className="absolute right-5 top-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Next</button>
            }
          </button>
        </div>
      ))}
    </div>
  );
}



function App() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(null); // Initially no date selected

  return (
    <div className="flex flex-col lg:flex-row lg:w-3/4 mx-auto gap-10 h-screen items-center">
      <div className="h-96 w-full lg:w-96 px-5 flex-col">
        <div className="border-b-2 p-4 grid place-content-center">
          <img src="logo.png" className="w-20 h-20"/>
        </div>
        <div className="p-4 grid place-content-center">
          <h1 className="font-semibold">Schedule for {selectDate ? selectDate.toDate().toDateString() : 'Select a date'}</h1>
          <p>Book a meeting with our Scheduler.</p>
        </div>
      </div>
      <div className="w-full lg:w-96 h-auto lg:h-96 px-5">
        <div className="flex justify-between">
          <h1 className="font-semibold">{months[today.month()]}, {today.year()}</h1>
          <div className="flex item-center gap-5">
            <GrFormPrevious className="w-5 h-5 cursor-pointer" onClick={() => {
              setToday(today.month(today.month() - 1));
            }} />
            <h1 className="cursor-pointer" onClick={() => {
              setToday(currentDate);
            }}>Today</h1>
            <GrFormNext className="w-5 h-5 cursor-pointer" onClick={() => {
              setToday(today.month(today.month() + 1));
            }} />
          </div>
        </div>
        <div className="w-full grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <h1 key={index} className="h-14 grid place-content-center text-sm">
                {day}
              </h1>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
            return (
              <div key={index} className="h-14 border-t grid place-content-center text-sm">
                <h1 className={cn(
                  currentMonth ? "" : "text-gray-400",
                  today ? "bg-red-600 text-white" : "",
                  selectDate && selectDate.isSame(date, 'day') ? "bg-black text-white" : "",
                  "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                )}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            )
          })}
        </div>
      </div>
      <TimeAvailability selectedDate={selectDate} />
    </div>
  );
}

export default App;
