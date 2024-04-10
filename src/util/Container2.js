import React from 'react';
import dayjs from 'dayjs';
import { generateDate } from "./calendar";
import { months } from './calendar';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

function Container2({ selectDate, setSelectDate, handleNextButtonClick, setSelectedTime }) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = React.useState(currentDate);

  return (
    <div className="container2 w-full lg:w-96 h-auto lg:h-96 px-5">
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
        {days.map((day, index) => (
          <h1 key={index} className="h-14 grid place-content-center text-sm">
            {day}
          </h1>
        ))}
      </div>
      <div className="w-full grid grid-cols-7">
        {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => (
          <div key={index} className="h-14 border-t grid place-content-center text-sm">
            <h1
              className={`${
                currentMonth ? "" : "text-gray-400"
              } ${
                today ? "bg-red-600 text-white" : ""
              } ${
                "h-10 w-10 grid place-content-center rounded-full transition-all cursor-pointer " + (selectDate && selectDate.isSame(date, 'day') ? "bg-black text-white" : "hover:bg-black hover:text-white")
              }`}
              onClick={() => {
                setSelectDate(date);
              }}
            >
              {date.date()}
            </h1>
            {selectDate && selectDate.isSame(date, 'day')}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container2;
