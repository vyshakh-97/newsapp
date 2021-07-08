import React from 'react'
import "./Styles/Newscard.css"
const Newscard = ({ newsItem }) => {
    return (
        <div className="newscard">
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

        </div>
    )
}

export default Newscard

