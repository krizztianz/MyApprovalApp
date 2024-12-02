import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import '../../styles/admin.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <p>Your content here</p>
        </div>
      </div>
    </div>
  );
};

export default Home;