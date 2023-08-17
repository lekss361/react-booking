import React from 'react'
import logo from './assets/Logo.png';
import './Header.scss';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const Header = () => {
  const toggleNavVisibility = () => { };

  return (
    <header>
      <img src={logo} alt="" />

      <div className="right-header">
        <a href="#" className="button">About Us</a>
        <a href="#" className="button article">Article</a>
        <a href="#" className="button">Property
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M14.6236 7.12001C14.624 6.94625 14.5631 6.77784 14.4515 6.64404C14.3887 6.56874 14.3116 6.50649 14.2245 6.46086C14.1374 6.41523 14.0421 6.38712 13.9441 6.37814C13.8461 6.36916 13.7473 6.37948 13.6533 6.40852C13.5593 6.43756 13.472 6.48474 13.3964 6.54736L9.38526 9.87916L5.36668 6.66635C5.29013 6.60458 5.20205 6.55844 5.10751 6.53061C5.01296 6.50277 4.91381 6.49377 4.81576 6.50414C4.71771 6.51451 4.62268 6.54403 4.53614 6.59101C4.44961 6.638 4.37327 6.70151 4.31151 6.77791C4.24339 6.85486 4.192 6.94497 4.16058 7.04259C4.12916 7.14021 4.11838 7.24323 4.12892 7.34519C4.13946 7.44715 4.17109 7.54584 4.22183 7.63507C4.27257 7.7243 4.34132 7.80215 4.42377 7.86372L8.91381 11.4558C9.04771 11.5652 9.21567 11.625 9.38901 11.625C9.56234 11.625 9.7303 11.5652 9.8642 11.4558L14.3542 7.73729C14.4448 7.66268 14.5164 7.56791 14.5632 7.46066C14.61 7.35341 14.6307 7.23671 14.6236 7.12001Z"
              fill="white" />
          </svg>
        </a>
        <a href="#" className="sign-up">Sign Up!</a>
      </div>
    </header>
  )
}