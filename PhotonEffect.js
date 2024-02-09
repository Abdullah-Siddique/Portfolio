import React from 'react';

const PhotonEffect = () => {
  const renderPhotons = () => {
    const numberOfPhotons = 100; // Change this number to adjust the number of photons

    const photons = [];
    for (let i = 0; i < numberOfPhotons; i++) {
      photons.push(<div className="photon" style={randomAnimationProperties()} key={i}></div>);
    }

    return photons;
  };

  const randomAnimationProperties = () => {
    return {
      top: `${getRandomNumber(window.innerHeight)}px`,
      left: `${getRandomNumber(window.innerWidth)}px`,
      animationDuration: `${getRandomNumber(4, 8)}s`,
      animationDelay: `${getRandomNumber(0, 4)}s`,
    };
  };

  const getRandomNumber = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return <div className="photon-container">{renderPhotons()}</div>;
};

export default PhotonEffect;
