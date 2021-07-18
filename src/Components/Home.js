import React from 'react'
import Navigation from "./Navigation"
import {useState, useEffect} from "react"
import axios from 'axios'
import apikey from "../api/config";
import News from './News';
import { motion } from 'framer-motion';
function Home() {
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
    <div className="Home">
    <Navigation setCategory={setCategory} />
    <motion.div initial={{opacity:0}}
    animate={{opacity:1}} transition={{delay:0,duration:1.8}}>
    <News newsArray={newsArray} newsResult={newsResult} />
    </motion.div>
    </div>
  );
}
      
export default Home;
