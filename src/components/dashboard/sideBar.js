"use client"

// components/Sidebar.js
import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '@/src/icons/menu-icon'; // Asegúrate de que la ruta sea correcta

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}
        style={{ width: '250px' }}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Dashboard Menu</h2>
          <nav>
            <Link href="#section1">1</Link>
            <Link href="#section2">2</Link>
            <Link href="#section3">3</Link>
            <Link href="#section4">4</Link>
          </nav>
        </div>
      </aside>
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-50' : 'opacity-0'} z-30`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default Sidebar;
