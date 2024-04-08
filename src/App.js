import dayjs from 'dayjs';
import './App.css';
import { generateDate } from "./util/calendar";
import cn from './util/cn';
import { useState } from 'react';
import { months } from './util/calendar';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

function App() {

  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
      <div className="h-96 w-96 px-5">
        <h1>Schedule for today</h1>
        <p>Book a meeting with our Scheduler.</p>
      </div>
      <div className="w-96 h-96 px-5">
        <div className="flex justify-between">
          <h1 className="font-semibold">{months[today.month()]}, {today.year()}</h1>
          <div className="flex item-center gap-5">
            <GrFormPrevious className="w-5 h-5 cursor-pointer" />
            <h1 className="cursor-pointer">Today</h1>
            <GrFormNext className="w-5 h-5 cursor-pointer" />
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
          {generateDate().map(({ date, currentMonth, today }, index) => {
            return (
              <div key={index} className="h-14 border-t grid place-content-center text-sm">
                <h1 className={cn(
                  currentMonth ? "" : "text-gray-400",
                  today ? "bg-red-600 text-white" : "",
                  "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                )}>
                  {date.date()}
                </h1>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
