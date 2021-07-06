import React from 'react'

const Newscard = ({ newsItem }) => {
    console.log({newsItem});
    return (
        <div className="newscard">
            <img alt={newsItem.title} src={newsItem.urlToImage} />
        </div>
    )
}

export default Newscard

