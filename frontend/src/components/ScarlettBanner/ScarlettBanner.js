import React, { useRef, useEffect, useState } from 'react';
import './ScarlettBanner.css';
import ScarlettBannerImage from '../../assets/images/CookingWScarlettBanner.png';

const ScarlettBanner = () => {
  const imageHolderRef = useRef(null);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  useEffect(() => {
    const updatePlaceholderHeight = () => {
      if (imageHolderRef.current) {
        setPlaceholderHeight(imageHolderRef.current.offsetHeight);
      }
    };

    //initial height
    updatePlaceholderHeight();

    // Update the height on window resize
    window.addEventListener('resize', updatePlaceholderHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updatePlaceholderHeight);
    };
  }, []);

  return (
    <>
      <div className="scarlett-banner">
        <div className="scarlett-banner-imageholder" ref={imageHolderRef}>
          <img src={ScarlettBannerImage} alt="Scarlett Banner" />
        </div>
        <div className="scarlett-banner-placeholder" style={{ height: `${placeholderHeight}px` }}></div>
      </div>
    </>
  );
};

export default ScarlettBanner;