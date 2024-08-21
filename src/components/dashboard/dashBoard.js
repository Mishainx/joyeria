"use client"
// Dashboard.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Dashboard =  ({categories}) => {
  const [selectedContent, setSelectedContent] = useState('products');

  return (
    <div className="flex min-h-screen">
      <Sidebar onSelect={setSelectedContent} />
      <Content selectedContent={selectedContent} categories={categories} />
    </div>
  );
};

export default Dashboard;
