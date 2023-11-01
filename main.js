const getDataForPainting = async (artworkId) => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks/${artworkId}`);
    return response.data;
}

const displayPaintingDetails = (artwork) => {
    const detailsContainer = document.getElementById('painting-details');
    detailsContainer.innerHTML = `
        <h2>${artwork.title}</h2>
        <p>Artist: ${artwork.artist_title}</p>
        <p>Date: ${artwork.date_display}</p>`;
}
const loadData = async (artworkId) => {
    try {
        const artwork = await getDataForPainting(artworkId);
        const paintingUrl = `https://www.artic.edu/artworks/${artworkId}`;
        window.open(paintingUrl, '_blank');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


