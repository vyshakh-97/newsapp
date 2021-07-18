import React, { useContext } from "react";
import { NewsContext } from "../providers/NewsContext";
import "../Styles/Newscontent.css";
const Newscontent = () => {
  const { newsUrl } = useContext(NewsContext);
  return (
    <div className="newsdetailss">
      <h1>{newsUrl}</h1>
    </div>
  );
};

export default Newscontent;
