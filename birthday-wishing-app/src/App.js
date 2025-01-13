import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import Gallery from './components/Gallery';
import './styles/App.css';

function App() {
  const [wishData, setWishData] = useState(null);
  const [wishes, setWishes] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);  // Track if the form is visible

  // Prevent scrolling when form is visible
  useEffect(() => {
    if (isFormVisible) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable scroll
    }
    
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scroll is enabled when unmounting
    };
  }, [isFormVisible]);

  const handleSubmitWish = (data) => {
    setWishData(data);
    setWishes([...wishes, data]);
    setIsFormVisible(false); // Hide form after submission
  };

  return (
    <div className="App">
      <Header />
      <Form onSubmit={handleSubmitWish} isVisible={isFormVisible} />
      {wishData && <Card name={wishData.name} wish={wishData.wish} />}
      <Gallery wishes={wishes} />
    </div>
  );
}

export default App;
