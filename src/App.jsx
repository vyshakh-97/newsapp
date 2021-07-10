import React from "react";
import Navigation from "./Components/Navigation"
import {useState, useEffect} from "react"
import axios from 'axios'
import apikey from "./api/config"
import News from './Components/News';
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray]= useState([]);
  const [newsResult, setnewsResult] = useState();
  const newsApi= async () => {
    try{
      const newscontent= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`
      );
      setnewsArray(newscontent.data.articles);
      setnewsResult(newscontent.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    newsApi();
  },[newsResult, category]);
  return (
    <div className="App">
    <Navigation setCategory={setCategory} />
    <News newsArray={newsArray} newsResult={newsResult} />
    </div>
  );
}

export default App;
