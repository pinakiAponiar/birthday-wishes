// src/components/Form.js
import React, { useState } from 'react';
import '../styles/Form.css';
import { motion } from 'framer-motion';

const Form = ({ onSubmit, isVisible }) => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && wish) {
      onSubmit({ name, wish });
      setName('');
      setWish('');
    }
  };

  if (!isVisible) return null; // Don't show the form if it's not visible

  return (
    <motion.div 
      className="form-container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h2>Enter Your Birthday Wish</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <textarea 
          placeholder="Your Birthday Wish" 
          value={wish} 
          onChange={(e) => setWish(e.target.value)} 
        />
        <button type="submit">Create Wish</button>
      </form>
    </motion.div>
  );
};

export default Form;
