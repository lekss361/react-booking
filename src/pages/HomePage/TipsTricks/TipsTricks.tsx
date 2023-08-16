import React from 'react'
import './TipsTricks.scss'
import home1 from './assets/home-1.png'
import home9 from './assets/home-9.png'
import home10 from './assets/home-10.png'
import avatar3 from './assets/avatar-3.jpg'
import avatar9 from './assets/avatar-9.jpg'
import avatar10 from './assets/avatar-10.jpg'
import avatar11 from './assets/avatar-11.jpg'
import hall from './assets/hall.jpg'

export const TipsTricks = () => {
  return (
    <div className="blocks more-about">
        <div className="yellow-text yellow-text-column">
            <div className="line"></div>
            <h6>See tips and trick from our partnership</h6>
        </div>
        <h2>Find out more about</h2>
        <h2>selling and buying homes</h2>
        <a href="#">
            <h6>More Artikel</h6>
        </a>
        <div className="articles">
            <div className="left-articles">
                <div className="small-preview-articl">
                    <img src={hall}/>
                    <div className="description">
                        <div className="fio">
                            <img src={avatar3}/>
                            <h6>Dianne Russell</h6>
                        </div>
                        <h5>The things we need to check when we want to buy a house</h5>
                        <div className="date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                                    fill="#888B97" />
                            </svg>
                            <h6>4 min read | 25 Apr 2021</h6>
                        </div>
                    </div>
                </div>
                <div className="small-preview-articl">
                    <img src={home10}/>
                    <div className="description">
                        <div className="fio">
                            <img src={avatar9}/>
                            <h6>Courtney Henry</h6>
                        </div>
                        <h5>7 Ways to distinguish the quality of the house we want to buy</h5>
                        <div className="date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                                    fill="#888B97" />
                            </svg>
                            <h6>6 min read | 24 Apr 2021</h6>
                        </div>
                    </div>
                </div>
                <div className="small-preview-articl">
                    <img src={home9}/>
                    <div className="description">
                        <div className="fio">
                            <img src={avatar10}/>
                            <h6>Darlene Robertson</h6>
                        </div>
                        <h5>The best way to know the quality of the house we want to buy</h5>
                        <div className="date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                                    fill="#888B97" />
                            </svg>
                            <h6>2 min read | 24 Apr 2021</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-articl">
                <img src={home1}/>
                <div className="description">
                    <div className="fio">
                        <img src={avatar11}/>
                        <h6>Cameron Williamson</h6>
                    </div>
                    <h3>12 Things to know before buying a house</h3>
                    <h6>Want to buy a house but are unsure about what we should know, here I will try to explain what we
                        should know and check when we want to buy a house</h6>
                    <div className="date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                                fill="#888B97" />
                        </svg>
                        <h6>8 min read | 25 Apr 2021</h6>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
