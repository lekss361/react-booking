import React from 'react'
import './HomePage.scss';
import { FirstView } from './FirstView/FirstView';
import { Recommendation } from './Recommendation/Recommendation';
import { Sell } from './Sell/Sell';
import { Review } from './Review/Review';
import { TipsTricks } from './TipsTricks/TipsTricks';
import { Subscribe } from './Subscribe/Subscribe';
export const HomePage = () => {
  return (
    
    <><FirstView />
    <Recommendation />
    <Sell/>
    <Review/>
    <TipsTricks/>
    <Subscribe/>
    </>
  )
}

