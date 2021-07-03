import './App.css';
import Navigation from "./Components/Navigation"
import {useState} from "react"
function App() {
  const [category, setCategory] = useState("general");
  return (
    <div className="App">
    <Navigation setCategory={setCategory} />
    </div>
  );
}

export default App;
