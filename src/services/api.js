const API_URL = 'http://localhost:1337';

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
        return [];
    }
};

export const getPhotosByCategory = async (categorySlug) => {
    try {
        // Using a simpler filter approach for Strapi v4
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
            // Build image URL directly from the Image.url
            let imageUrl = null;
            if (item.Image && item.Image.url) {
                imageUrl = getStrapiURL(item.Image.url);
            }
            
            return {
                id: item.id,
                src: imageUrl,
                alt: item.Title || 'Photo',
                aspectRatio: 'aspect-square',
                description: item.Description || ''
            };
        }).filter(photo => photo.src !== null); // Filter out photos with no image
        
        return transformedData;
        
    } catch (error) {
        return [];
    }
};