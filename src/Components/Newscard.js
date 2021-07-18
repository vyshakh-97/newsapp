import React, {useCallback,useState} from 'react'
import "../Styles/Newscard.css"
import { motion } from 'framer-motion';
import {useHistory,Link} from 'react-router-dom';
import Newscontent from './Newscontent';
export const NewsContext=React.createContext();


const Newscard = ({ newsItem }) => {
    const [newsurl, setUrl] = useState("");
    const history = useHistory();
    return ( 
        <div>
    <NewsContext.Provider value={newsurl}>
  <Link to="/newscontent" target="_blank" style={{color:"black",textDecoration: 'none' }}>
        <motion.div className="newscard" initial={{x:-35}}
        animate={{x:0}} transition={{delay:0.5, duration:1}} onClick={()=> setUrl(newsItem.title)} key={newsItem.title}>
            <img className="newsimg" alt={newsItem.title} src={newsItem.urlToImage} />
            <div className="newscontent">
                <div>
                    <span className="newstitle">{newsItem.title}</span>
                    <br />
                     <span className="author">{newsItem.author}</span>
                 </div>
                 <div className="description">
                 {newsItem.description}
                 <div className="readmore">
            read more at {" "}
            <a href={newsItem.url} target="__blank" className="source">
              <b>{newsItem.source.name}</b>
            </a>
          </div>
                 </div>
            </div>

        </motion.div>
        </Link>
        <Newscontent />
        </NewsContext.Provider>
        </div>
    )
}

export default Newscard
