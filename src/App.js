import './App.css';
import {generateDate} from "./util/calendar";

function App() {
  console.log(generateDate());

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Tailwind CSS wit react</h1>
    </div>
  );
}

export default App;
