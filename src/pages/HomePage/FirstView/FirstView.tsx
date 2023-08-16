import React from 'react'
import './FirstView.scss';
import company1 from './/assets//company-1.png';
import company2 from './/assets//company-2.png';
import company3 from './/assets//company-3.png';
import company4 from './/assets//company-4.png';
import homefirstview from './/assets//Frame16.png';
import avatar1 from './/assets//avatar-1.jpg';
import avatar2 from './/assets//avatar-2.jpg';
import avatar3 from './/assets//avatar-3.jpg';
import avatar4 from './/assets//avatar-4.jpg';
import home1 from './/assets//home-1.png';


export const FirstView = () => {
  return (
    <div className="first-view">
        <div className="search-location">
            <h1>find the place to<br/>
                live your dreams<br/>
                easily here</h1>
            <h6>
                Everything you need about finding your place to live will be here, where it will be easier for you
            </h6>
            <div className="search-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 1C14.3869 1 16.6761 1.99337 18.364 3.76159C20.0518 5.5298 21 7.92801 21 10.4286C21 14.934 18.0975 19.081 12.402 22.8776C12.2818 22.9575 12.1424 23 12 23C11.8576 23 11.7182 22.9575 11.598 22.8776C5.9025 19.081 3 14.934 3 10.4286C3 7.92801 3.94821 5.5298 5.63604 3.76159C7.32387 1.99337 9.61305 1 12 1ZM12 7.28576C11.2044 7.28576 10.4413 7.61689 9.87868 8.20629C9.31607 8.7957 9 9.5951 9 10.4286C9 11.2622 9.31607 12.0616 9.87868 12.651C10.4413 13.2404 11.2044 13.5715 12 13.5715C12.7956 13.5715 13.5587 13.2404 14.1213 12.651C14.6839 12.0616 15 11.2622 15 10.4286C15 9.5951 14.6839 8.7957 14.1213 8.20629C13.5587 7.61689 12.7956 7.28576 12 7.28576Z"
                        fill="#F59E0B" />
                </svg>
                <h6 className="input">Search for the location you want!</h6>
                <a href="#" className="search-button">
                    <h6>
                        Search
                    </h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9.99335 5.0018C9.76166 5.00135 9.53713 5.08254 9.35872 5.2313C9.25831 5.31506 9.17532 5.41793 9.11448 5.53402C9.05364 5.65011 9.01616 5.77714 9.00419 5.90782C8.99221 6.03851 9.00598 6.17029 9.0447 6.29562C9.08341 6.42094 9.14632 6.53735 9.22981 6.63818L13.6722 11.9863L9.38847 17.3444C9.3061 17.4465 9.24459 17.5639 9.20747 17.69C9.17036 17.8161 9.15837 17.9482 9.17219 18.079C9.18601 18.2097 9.22537 18.3364 9.28802 18.4518C9.35066 18.5672 9.43535 18.669 9.53721 18.7513C9.63981 18.8421 9.75996 18.9107 9.89012 18.9526C10.0203 18.9945 10.1576 19.0088 10.2936 18.9948C10.4295 18.9807 10.5611 18.9385 10.6801 18.8709C10.7991 18.8032 10.9029 18.7116 10.985 18.6016L15.7744 12.6149C15.9203 12.4364 16 12.2124 16 11.9813C16 11.7502 15.9203 11.5263 15.7744 11.3477L10.8164 5.36101C10.7169 5.24026 10.5905 5.14481 10.4475 5.0824C10.3045 5.01999 10.1489 4.99238 9.99335 5.0018Z"
                            fill="white" />
                    </svg>
                </a>
            </div>
            <h6>Our Partnership</h6>
            <div className="partnership">
                <img src={company1}/>
                <img src={company2}/>
                <img src={company3}/>
                <img src={company4}/>
            </div>
        </div>

        <div className="main-image">
            <img className="main-photo" src={homefirstview}/>
            <div className="info">
                <img className="ava" src={avatar1}/>
                <img className="ava ava-2" src={avatar2}/>
                <img className="ava ava-3" src={avatar3}/>
                <div className="text-info">
                    <h6>1K+ People</h6>
                    <h6>Successfully Getting Home</h6>
                </div>
            </div>

            <div className="info info-2">
                <img className="ava" src={home1}/>
                <div className="text-info">
                    <h6>56 Houses</h6>
                    <h6>Sold Monthly</h6>
                </div>
            </div>

            <div className="info info-3">
                <img className="ava" src={avatar4}/>
                <div className="text-info">
                    <h6>4K+</h6>
                    <h6>People Looking for New Homes</h6>
                </div>
            </div>
            
        </div>
    </div>
  )
}