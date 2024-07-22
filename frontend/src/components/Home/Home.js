import React from 'react';
import './Home.css';
import ScarlettBanner from '../ScarlettBanner/ScarlettBanner';
import BackgroundYellow from '../Backgrounds/BackgroundYellow';

const Home = () => {
  return (
    <div>
        <ScarlettBanner />
        <BackgroundYellow />
        <p>Home</p>
    </div>
  );
};

export default Home;