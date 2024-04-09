import React from 'react';
import cn from './cn';
import EnterDetailsForm from './EnterDetailsForm';

function Container2({ selectDate, today, currentDate, setToday, generateDate, days, months, setSelectDate, GrFormPrevious, GrFormNext }) {
  const [showForm, setShowForm] = React.useState(false);
  const [nextButtonIndex, setNextButtonIndex] = React.useState(-1);

  const handleNextButtonClick = (index) => {
    setNextButtonIndex(index);
    setShowForm(true);
  };

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
              {selectDate && selectDate.isSame(date, 'day') &&
                <span className="absolute right-5 top-2 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => handleNextButtonClick(index)}>Next</span>
              }
            </div>
          )
        })}
      </div>
      {showForm && <EnterDetailsForm />}
    </div>
  );
}

export default Container2;
