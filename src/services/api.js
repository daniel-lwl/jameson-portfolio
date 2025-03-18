const API_URL = 'http://localhost:1337';

export const getStrapiURL = (path = '') => {
  return `${API_URL}${path}`;
};

export const fetchAPI = async (path, urlParamsObject = {}) => {
  // Build request URL
  const queryString = new URLSearchParams(urlParamsObject).toString();
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`;
  
  console.log('Fetching from:', requestUrl);

  try {
    // Trigger API call
    const response = await fetch(requestUrl);
    
    if (!response.ok) {
      console.error('API error status:', response.status);
      console.error('API error text:', await response.text());
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error details:', error);
    throw error;
  }
};

export const getCategories = async () => {
    try {
        console.log('Fetching categories from Strapi...');
        const data = await fetchAPI('/categories', {
        populate: '*',
        });
        console.log('Categories data received:', data);
        return data.data;
    } catch (error) {
        console.error('Error getting categories:', error);
        return [];
    }
};
