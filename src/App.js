import React, { useState } from 'react';
import dayjs from 'dayjs';
import './App.css';
import Container1 from './util/Container1';
import Container2 from './util/Container2';
import TimeAvailability from './util/TimeAvailability';
import EnterDetails from './util/EnterDetailsForm';
import { generateDate } from "./util/calendar";

import { months } from './util/calendar';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

function App() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(null); // Initially no date selected
  const [showEnterDetails, setShowEnterDetails] = useState(false); // State to manage whether to show Enter Details component or not

  return (
    <div className="flex flex-col lg:flex-row lg:w-3/4 mx-auto gap-10 h-screen items-center relative">
      {showEnterDetails && <EnterDetails />}
      <Container1 selectDate={selectDate} today={today} currentDate={currentDate} setToday={setToday} generateDate={generateDate} days={days} months={months} setSelectDate={setSelectDate} GrFormPrevious={GrFormPrevious} GrFormNext={GrFormNext} />
      <Container2 selectDate={selectDate} today={today} currentDate={currentDate} setToday={setToday} generateDate={generateDate} days={days} months={months} setSelectDate={setSelectDate} GrFormPrevious={GrFormPrevious} GrFormNext={GrFormNext} setShowEnterDetails={setShowEnterDetails} />
      <TimeAvailability selectedDate={selectDate} setShowEnterDetails={setShowEnterDetails} />
    </div>
  );
}

export default App;
