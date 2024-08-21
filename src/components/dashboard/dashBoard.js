"use client"
// Dashboard.jsx
import { useState } from 'react';
import Prueba from './Prueba';
import Sidebar from './Sidebar';
import Content from './Content';

const Dashboard =  ({categories}) => {
  const [selectedContent, setSelectedContent] = useState('products');

    // Función onSelect que actualiza el estado
    const onSelect = (content) => {
      setSelectedContent(content);
    };

  return (
    <div className="flex min-h-screen">
      <Prueba onSelect={onSelect}/>
    </div>
  );
};

export default Dashboard;
