"use client"
// Dashboard.jsx
import { useState } from 'react';
import SideBarAdmin from './SideBarAdmin';

const Dashboard =  ({categories}) => {
  const [selectedContent, setSelectedContent] = useState('products');

    // Función onSelect que actualiza el estado
    const onSelect = (content) => {
      setSelectedContent(content);
    };

  return (
    <div className="flex min-h-screen">
      <SideBarAdmin onSelect={onSelect}/>
    </div>
  );
};

export default Dashboard;
