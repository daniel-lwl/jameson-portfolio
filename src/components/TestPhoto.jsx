// TestPhotos.jsx
import React, { useEffect, useState } from 'react';
import { getStrapiURL, getPhotosByCategory } from '../services/api';

const TestPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState('japan'); // Default category to test
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getPhotosByCategory(category);
        setPhotos(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setError('Failed to fetch photos: ' + error.message);
        setLoading(false);
      }
    };
    
    fetchPhotos();
  }, [category]);

  const categoryOptions = ['japan', 'korea', 'cars'];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Strapi Photos Test</h1>
      
      <div className="mb-6">
        <label className="block mb-2">Select Category:</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded w-full max-w-xs"
        >
          {categoryOptions.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      {loading ? (
        <p>Loading photos...</p>
      ) : error ? (
        <div className="p-4 bg-red-900/30 border border-red-900 rounded">
          <p>{error}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl mb-4">Found {photos.length} photos in category: {category}</h2>
          
          {photos.length === 0 ? (
            <p>No photos found. Make sure you've added photos to this category in Strapi.</p>
          ) : (
            <div>
              <table className="w-full border-collapse mb-8">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border border-gray-700 p-2">ID</th>
                    <th className="border border-gray-700 p-2">Title</th>
                    <th className="border border-gray-700 p-2">Description</th>
                    <th className="border border-gray-700 p-2">Image URL</th>
                  </tr>
                </thead>
                <tbody>
                  {photos.map(photo => (
                    <tr key={photo.id} className="hover:bg-gray-800">
                      <td className="border border-gray-700 p-2">{photo.id}</td>
                      <td className="border border-gray-700 p-2">{photo.alt}</td>
                      <td className="border border-gray-700 p-2">{photo.description || '—'}</td>
                      <td className="border border-gray-700 p-2 break-all">
                        <span className="text-blue-400">{photo.src || 'No image URL'}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <h3 className="text-lg mb-4">Image Preview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map(photo => (
                  <div key={photo.id} className="bg-gray-800 rounded p-2">
                    <p className="mb-2 text-sm">{photo.alt}</p>
                    {photo.src ? (
                      <img 
                        src={photo.src} 
                        alt={photo.alt}
                        className="w-full h-48 object-cover object-center rounded"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '';
                          e.target.classList.add('bg-gray-900');
                          e.target.parentNode.innerHTML += '<p class="text-red-400 mt-2">Image failed to load</p>';
                        }}
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-900 flex items-center justify-center rounded">
                        <p className="text-gray-500">No image available</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestPhotos;