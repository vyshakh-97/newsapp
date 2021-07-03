import React from 'react'
import "./Navigation.css"
import Leftbar from "./Leftbar"
const Navigation = ({setCategory}) => {
    return (
        <div className="nav">
            <div className="navicon">
            <Leftbar setCategory={setCategory} />
            </div>
            <h2>
            Newsfy
            </h2>
            
        </div>
    )
}

export default Navigation
