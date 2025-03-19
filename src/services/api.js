// api.js - works in all environments (Vite, CRA, Next.js)

// Check which environment we're in and get the API URL accordingly
const getApiUrl = () => {
  // For Next.js
  if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  // For Vite/CRA
  if (import.meta && import.meta.env && import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // For Create React App
  if (window.ENV && window.ENV.REACT_APP_API_URL) {
    return window.ENV.REACT_APP_API_URL;
  }
  
  // Fallback to localhost for development
  return 'http://localhost:1337';
};

// Using the function to get the API URL
const API_URL = getApiUrl();

export const getStrapiURL = (path = '') => {
  return `${API_URL}${path}`;
};

export const fetchAPI = async (path, urlParamsObject = {}) => {
  // Build request URL
  const queryString = new URLSearchParams(urlParamsObject).toString();
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`;

  try {
    // Trigger API call
    const response = await fetch(requestUrl);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCategories = async () => {
    try {
        const data = await fetchAPI('/categories', {
          populate: '*',
        });
        return data.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

export const getPhotosByCategory = async (categorySlug) => {
    try {
        // Using a filter approach for Strapi v4
        const data = await fetchAPI('/photos', {
            'filters[category][Slug][$eq]': categorySlug,
            'populate': '*',
            'sort[0]': 'createdAt:desc',
        });
        
        if (!data || !data.data || !Array.isArray(data.data)) {
            return [];
        }
        
        // Transform the data structure to match what PhotoGrid expects
        const transformedData = data.data.map(item => {
            // Build image URL directly
            let imageUrl = null;
            if (item.attributes && item.attributes.Image && item.attributes.Image.data) {
                // Handle the nested structure from Strapi v4
                const imageData = item.attributes.Image.data;
                if (imageData.attributes && imageData.attributes.url) {
                    imageUrl = getStrapiURL(imageData.attributes.url);
                }
            } else if (item.Image && item.Image.url) {
                // Fallback for simpler structure
                imageUrl = getStrapiURL(item.Image.url);
            }
            
            return {
                id: item.id,
                src: imageUrl,
                alt: item.attributes?.Title || item.Title || 'Photo',
                aspectRatio: 'aspect-square',
                description: item.attributes?.Description || item.Description || ''
            };
        }).filter(photo => photo.src !== null); // Filter out photos with no image
        
        return transformedData;
        
    } catch (error) {
        console.error('Error fetching photos:', error);
        return [];
    }
};