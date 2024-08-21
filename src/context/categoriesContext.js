"use client";

// src/context/CategoryContext.js
import { createContext, useState, useEffect, useContext } from 'react';

const CategoryContext = createContext();

export function useCategories() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
        const data = await res.json();
        if (data && data.payload) {
          setCategories(data.payload);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
    fetchCategories();
  }, []);

  // Observa los cambios en categories
  useEffect(() => {
  }, [categories]);

  return (
    <CategoryContext.Provider value={ categories }>
      {children}
    </CategoryContext.Provider>
  );
}
