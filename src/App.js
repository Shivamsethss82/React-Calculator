import './App.css';

import AddTwoNumbers from "./components/AddTwoNumbers";
import Calculator from "./components/Calculator";
import MinusTwoNumbers from "./components/MinusTwoNumbers";


function App() {
  return (
    <div className="App-header">
      <h1>A Magical Calculator</h1>
      {/* <AddTwoNumbers /> */}
      <MinusTwoNumbers/>
    </div>
  );
}

export default App;
