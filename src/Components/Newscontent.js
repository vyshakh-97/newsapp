import React, { useContext } from 'react'
import { NewsContext } from './Newscard'
import "../Styles/Newscontent.css"
const Newscontent = () => {
   const newsurl = useContext(NewsContext);
   console.log(newsurl);
    return (
        <div className="newsdetailss">
            {newsurl}
        </div>
    )
}

export default Newscontent
