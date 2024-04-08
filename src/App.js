import './App.css';
import {generateDate} from "./util/calendar";
import cn from './util/cn';

function App() {
  console.log(generateDate());

  const days = ["S","M","T","W","T","F","S"];

  return (
    <div className="w-96 h-96">
      <div className="w-full grid grid-cols-7">
        {days.map((day,index)=>{
          return (
            <h1 key={index} className="h-14 grid place-content-center text-sm">
              {day}
            </h1>
          );
        })}
      </div>
    <div className="w-full grid grid-cols-7">
      {generateDate().map(({date, currentMonth, today}, index) => {
        return(
          <div className="h-14 border-t grid place-content-center text-sm">
            <h1 key={index} 
            className={cn(currentMonth?"":"text-gray-400")}>
              {date.date()}
            </h1>
          </div>
        )
      })}
    </div>
    </div>
  );
}

export default App;
