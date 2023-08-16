import React from 'react'
import subscribe from './assets/subscribe.png'
import './Subscribe.scss'

export const Subscribe = () => {
  return (
    <div className="blocks more-about last">
        <img src={subscribe}/>
        <div className="button-text">
            <h2>Subscribe For More Info</h2>
            <h2> and update from Hounter</h2>
            <div className="search-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM19 6L12.5 10.47C12.348 10.5578 12.1755 10.604 12 10.604C11.8245 10.604 11.652 10.5578 11.5 10.47L5 6H19Z"
                        fill="#3B82F6" />
                </svg>
                <h6 className="input">Your email here</h6>
                <a href="#" className="search-button">
                    <h6>
                        Subsribe Now
                    </h6>
                </a>
            </div>
        </div>
    </div>
  )
}
