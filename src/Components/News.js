import { Container } from '@material-ui/core'
import React from 'react'
import Newscard from './Newscard'
const News = ({newsArray,newsResult}) => {
    return (
        <Container maxWidth="md">
        <div className="news">
           {newsArray.map((newsItem) => {
            <Newscard newsItem={newsItem} key={newsItem.title} />
           } ) }
        </div>
        </Container>
    )
}

export default News