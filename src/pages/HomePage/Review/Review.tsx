import React from 'react'
import'./Review.scss';
import home7 from './assets/home-7.png'
import home8 from './assets/home-8.png'
import home9 from './assets/home-9.png'
import avatar1 from './assets/avatar-1.jpg'
import avatar3 from './assets/avatar-3.jpg'
import avatar15 from './assets/avatar-15.jpeg'


export const Review = () => {
  return (
    <div className="blocks sell">
        <div className="yellow-text yellow-text-column">
            <div className="line"></div>
            <h6>See Our Review</h6>
        </div>
        <h2>What Our User Say About Us</h2>
        <div className="overflow">

            <div className="grid-reviews">
                <div className="home">
                    <img className="main-home" src={home7} alt=""/>
                    <div className="description">
                        <div className="text">
                            <h4>My house sold out fast!</h4>
                            <h6>I was finally able to sell my house quickly through Hounter by immediately setting me up
                                with people who wanted my house. I also do not get a discount from the sale of my house.
                                Awesome!</h6>
                        </div>
                        <div className="contact">

                            <img src={avatar15}/>
                            <div className="text-info">
                                <h6 className="name">Courtney Henry</h6>
                                <h6>CEO Andarafish</h6>
                            </div>
                            <div className="star">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                    fill="none">
                                    <path
                                        d="M25.6048 10.7088C25.5315 10.4929 25.3965 10.3031 25.2166 10.1629C25.0366 10.0228 24.8196 9.93838 24.5922 9.92018L17.941 9.39168L15.0628 3.02052C14.9712 2.81531 14.8221 2.64103 14.6336 2.51868C14.445 2.39634 14.2251 2.33118 14.0004 2.33105C13.7756 2.33093 13.5557 2.39585 13.367 2.51799C13.1783 2.64012 13.0291 2.81425 12.9372 3.01935L10.059 9.39168L3.40784 9.92018C3.18437 9.93789 2.97074 10.0196 2.79249 10.1555C2.61424 10.2915 2.47894 10.4759 2.40275 10.6867C2.32657 10.8975 2.31274 11.1259 2.36291 11.3443C2.41309 11.5628 2.52514 11.7622 2.68568 11.9187L7.60084 16.7102L5.86251 24.2375C5.80973 24.4654 5.82664 24.7038 5.91107 24.9219C5.99549 25.14 6.14352 25.3278 6.33595 25.4607C6.52837 25.5936 6.75632 25.6657 6.99019 25.6674C7.22407 25.6692 7.45308 25.6007 7.64751 25.4707L14 21.2357L20.3525 25.4707C20.5512 25.6026 20.7856 25.6706 21.0241 25.6653C21.2626 25.6601 21.4937 25.582 21.6865 25.4414C21.8792 25.3009 22.0243 25.1047 22.1022 24.8793C22.1802 24.6538 22.1872 24.4099 22.1223 24.1803L19.9885 16.7137L25.2805 11.9514C25.627 11.6387 25.7542 11.151 25.6048 10.7088Z"
                                        fill="#F59E0B" />
                                </svg>
                                <h4>4.3</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home">
                    <img className="main-home" src={home8}/>
                    <div className="description">
                        <div className="text">
                            <h4>Best! I got the house I wanted through Hounter</h4>
                            <h6>Through this website I can get a house with the type and specifications I want very
                                easily, without a complicated process to be able to find information on the house we
                                want.</h6>
                        </div>
                        <div className="contact">

                            <img src={avatar3}/>
                            <div className="text-info">
                                <h6 className="name">Dianne Russell</h6>
                                <h6>Manager Director</h6>
                            </div>
                            <div className="star">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                    fill="none">
                                    <path
                                        d="M25.6048 10.7088C25.5315 10.4929 25.3965 10.3031 25.2166 10.1629C25.0366 10.0228 24.8196 9.93838 24.5922 9.92018L17.941 9.39168L15.0628 3.02052C14.9712 2.81531 14.8221 2.64103 14.6336 2.51868C14.445 2.39634 14.2251 2.33118 14.0004 2.33105C13.7756 2.33093 13.5557 2.39585 13.367 2.51799C13.1783 2.64012 13.0291 2.81425 12.9372 3.01935L10.059 9.39168L3.40784 9.92018C3.18437 9.93789 2.97074 10.0196 2.79249 10.1555C2.61424 10.2915 2.47894 10.4759 2.40275 10.6867C2.32657 10.8975 2.31274 11.1259 2.36291 11.3443C2.41309 11.5628 2.52514 11.7622 2.68568 11.9187L7.60084 16.7102L5.86251 24.2375C5.80973 24.4654 5.82664 24.7038 5.91107 24.9219C5.99549 25.14 6.14352 25.3278 6.33595 25.4607C6.52837 25.5936 6.75632 25.6657 6.99019 25.6674C7.22407 25.6692 7.45308 25.6007 7.64751 25.4707L14 21.2357L20.3525 25.4707C20.5512 25.6026 20.7856 25.6706 21.0241 25.6653C21.2626 25.6601 21.4937 25.582 21.6865 25.4414C21.8792 25.3009 22.0243 25.1047 22.1022 24.8793C22.1802 24.6538 22.1872 24.4099 22.1223 24.1803L19.9885 16.7137L25.2805 11.9514C25.627 11.6387 25.7542 11.151 25.6048 10.7088Z"
                                        fill="#F59E0B" />
                                </svg>
                                <h4>4.6</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home">
                    <img className="main-home" src={home9} alt=""/>
                    <div className="description">
                        <div className="text">
                            <h4>Through the Hounter, I can get a house for my self</h4>
                            <h6>By looking for information about what kind of house we want, we managed to get the house
                                we wanted very quickly, and directly connected with the seller to be able to ask about
                                the details, very helpful!</h6>
                        </div>
                        <div className="contact">

                            <img src={avatar1}/>
                            <div className="text-info">
                                <h6 className="name">Esther Howard</h6>
                                <h6>Head of Marketing</h6>
                            </div>
                            <div className="star">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                    fill="none">
                                    <path
                                        d="M25.6048 10.7088C25.5315 10.4929 25.3965 10.3031 25.2166 10.1629C25.0366 10.0228 24.8196 9.93838 24.5922 9.92018L17.941 9.39168L15.0628 3.02052C14.9712 2.81531 14.8221 2.64103 14.6336 2.51868C14.445 2.39634 14.2251 2.33118 14.0004 2.33105C13.7756 2.33093 13.5557 2.39585 13.367 2.51799C13.1783 2.64012 13.0291 2.81425 12.9372 3.01935L10.059 9.39168L3.40784 9.92018C3.18437 9.93789 2.97074 10.0196 2.79249 10.1555C2.61424 10.2915 2.47894 10.4759 2.40275 10.6867C2.32657 10.8975 2.31274 11.1259 2.36291 11.3443C2.41309 11.5628 2.52514 11.7622 2.68568 11.9187L7.60084 16.7102L5.86251 24.2375C5.80973 24.4654 5.82664 24.7038 5.91107 24.9219C5.99549 25.14 6.14352 25.3278 6.33595 25.4607C6.52837 25.5936 6.75632 25.6657 6.99019 25.6674C7.22407 25.6692 7.45308 25.6007 7.64751 25.4707L14 21.2357L20.3525 25.4707C20.5512 25.6026 20.7856 25.6706 21.0241 25.6653C21.2626 25.6601 21.4937 25.582 21.6865 25.4414C21.8792 25.3009 22.0243 25.1047 22.1022 24.8793C22.1802 24.6538 22.1872 24.4099 22.1223 24.1803L19.9885 16.7137L25.2805 11.9514C25.627 11.6387 25.7542 11.151 25.6048 10.7088Z"
                                        fill="#F59E0B" />
                                </svg>
                                <h4>4.6</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg className="points" xmlns="http://www.w3.org/2000/svg" width="56" height="8" viewBox="0 0 56 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#E0E3EB" />
            <circle cx="28" cy="4" r="4" fill="#3C4563" />
            <circle cx="52" cy="4" r="4" fill="#E0E3EB" />
        </svg>
    </div>
  )
}
