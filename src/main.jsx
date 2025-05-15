import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'

// import StarRating, { Test } from './components/rating/StarRating';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />

    <StarRating
      maxRating={10}
      size={24}
      color='red'
      className=''
      defaultRating={5}
    />

    <Test /> */}
  </StrictMode>,
);
