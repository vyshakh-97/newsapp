import React, { useContext, useState } from "react";
import "../Styles/Newscard.css";
import { motion } from "framer-motion";
import { useHistory, Link } from "react-router-dom";
import { NewsContext } from "../providers/NewsContext";

const Newscard = ({ newsItem }) => {
  const history = useHistory();
  const { changeNewsUrl } = useContext(NewsContext);

  return (
    <div>
      <motion.div
        className="newscard"
        initial={{ x: -35 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        onClick={() => {
          changeNewsUrl(newsItem.title);
          history.push('/newscontent')
        }}
        key={newsItem.title}
      >
        <img
          className="newsimg"
          alt={newsItem.title}
          src={newsItem.urlToImage}
        />
        <div className="newscontent">
          <div>
            <span className="newstitle">{newsItem.title}</span>
            <br />
            <span className="author">{newsItem.author}</span>
          </div>
          <div className="description">
            {newsItem.description}
            <div className="readmore">
              read more at{" "}
              <a href={newsItem.url} target="__blank" className="source">
                <b>{newsItem.source.name}</b>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Newscard;
