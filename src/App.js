import './App.css';
import Navigation from "./Components/Navigation"
import {useState, useEffect} from "react"
import axios from 'axios'
import apikey from "./Components/assets/config"
import News from './Components/News';
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray]= useState([]);
  const [newsResult, setnewsResult] = useState();
  const newsApi= async () => {
    try{
      const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`
      );
      setnewsArray(news.data.articles);
      setnewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
  },[newsResult, category])
  return (
    <div className="App">
    <Navigation setCategory={setCategory} />
    <News newsArray={newsArray} newsResult={newsResult} />
    </div>
  );
}

export default App;
