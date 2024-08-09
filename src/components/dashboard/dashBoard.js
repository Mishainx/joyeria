"use client"

// components/Dashboard.js
import { useState } from 'react';
import Sidebar from './sideBar';
import MenuIcon from '@/src/icons/menu-icon'; // Asegúrate de que la ruta sea correcta

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-white">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div
        className={`flex-1 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}
      >
        <div className="p-4">
          <div onClick={toggleSidebar}>
          <MenuIcon width={40} height={40} className='text-white md:hidden fixed top-4 left-4 z-50' />

          </div>
          <main className="p-4">
            <h1 className="text-2xl font-bold">Dashboard Content</h1>
            {/* Aquí se mostrará el contenido del dashboard */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
