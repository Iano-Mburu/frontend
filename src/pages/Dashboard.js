import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [redirectMessage, setRedirectMessage] = useState('');

  useEffect(() => {
    if (userInfo) {
      setRedirectMessage('You will be redirected to the products page in 5 seconds...');
      setTimeout(() => {
        navigate('/showproducts', { replace: true }); // redirect to /showproducts after 5 seconds
      }, 5000); // 5000ms = 5 seconds
    }
  }, [userInfo, navigate]);

  return (
    <div>
      <h1>Welcome, {userInfo.first_name} </h1>
      {redirectMessage && <p>{redirectMessage}</p>}
    </div>
  );
};

export default Dashboard;