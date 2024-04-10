// App.js
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
  const [selectDate, setSelectDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNextButtonClick = (time) => {
    setSelectedTime(time); // Update selected time state
  };

  const handleSchedule = (name, email) => {
    setName(name); // Set the name state
    setEmail(email); // Set the email state
  };

  return (
    <div className="flex flex-col lg:flex-row lg:w-3/4 mx-auto gap-10 h-screen items-center relative">
      <Container1
        selectDate={selectDate}
        today={today}
        currentDate={currentDate}
        setToday={setToday}
        generateDate={generateDate}
        days={days}
        months={months}
        setSelectDate={setSelectDate}
        GrFormPrevious={GrFormPrevious}
        GrFormNext={GrFormNext}
        selectedTime={selectedTime}
        name={name} // Pass the name state to Container1
        email={email} // Pass the email state to Container1
      />
      <Container2
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        handleNextButtonClick={handleNextButtonClick}
      />
      <TimeAvailability
        selectedDate={selectDate}
        setSelectedTime={setSelectedTime}
      />
    </div>
  );
}

export default App;
