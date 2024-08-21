"use client"
// Dashboard.jsx
import { useState } from 'react';
import Prueba from './Prueba';

const Dashboard =  ({categories}) => {
  const [selectedContent, setSelectedContent] = useState('products');

  return (
    <div className="flex min-h-screen">
      <Prueba/>
    </div>
  );
};

export default Dashboard;
