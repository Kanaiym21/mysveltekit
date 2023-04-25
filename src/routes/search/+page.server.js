export async function load({ fetch }) {  
    const page = Math.floor(Math.random() * 10000) + 1;
  
    const url = 'https://api.artic.edu/api/v1/artworks/search?q=image_id,title,artist_title,=' + page + '&limit=15';
  
    const artReq = await fetch(url);
    
    const artRes = await artReq.json();
  
    const artworks = artRes.data;
  
    return {
      artworks
    }
  
  }