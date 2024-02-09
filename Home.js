import React from 'react';
import TextBox from './TextBox';
import PhotonEffect from './PhotonEffect'; // Import the PhotonEffect component
import './Home.css'; // Import your Home.css file

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="front">Abdullah Siddique</div>
        <div className="back">
          <img src="https://i.postimg.cc/q7HXQ6Pk/413232099-696777009190042-407791796921927712-n.png" alt="Owner" />
        </div>
      </div>
      {/* Place other components if needed */}
      <TextBox />
      <PhotonEffect />
    </div>
  );
};

export default Home;
