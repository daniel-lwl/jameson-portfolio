// TestStrapi.jsx
import React, { useEffect, useState } from 'react';
import { getStrapiURL } from '../services/api';

const TestStrapi = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testAPI = async () => {
      try {
        const response = await fetch(`${getStrapiURL()}/api/categories?populate=*`);
        const data = await response.json();
        
        console.log('Raw Strapi response:', data);
        
        if (data && data.data) {
          // Log the first category to inspect its structure
          if (data.data.length > 0) {
            console.log('First category structure:', JSON.stringify(data.data[0], null, 2));
          }
          
          setCategories(data.data);
        } else {
          setError('Unexpected data structure from API');
        }
        setLoading(false);
      } catch (error) {
        console.error('API Test Error:', error);
        setError('Failed to connect to Strapi API: ' + error.message);
        setLoading(false);
      }
    };
    
    testAPI();
  }, []);

  if (loading) return <div>Loading data from Strapi...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Strapi Connection Test</h2>
      <p>If you see categories listed below, your connection is working!</p>
      <p>Raw data in console. Found {categories.length} categories.</p>
      <ul>
        {categories.length > 0 ? (
          categories.map(category => (
            <li key={category.id}>
              ID: {category.id}, Attributes: {JSON.stringify(category.Name)}
            </li>
          ))
        ) : (
          <li>No categories found. Check that you've created categories in Strapi.</li>
        )}
      </ul>
    </div>
  );
};

export default TestStrapi;