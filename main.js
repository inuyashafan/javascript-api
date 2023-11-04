
function loadData(artworkId) {
    axios.get(`https://api.artic.edu/api/v1/artworks/${artworkId}`)
        .then(response => {
            const artwork = response.data.data;
            const paintingDetails = document.getElementById('painting-details');
            paintingDetails.innerHTML = `
                <div class="list-group-item">
                    <h3>${artwork.title}</h3>
                    <p>Artist: ${artwork.artist_display}</p>
                    <p>Date: ${artwork.date_display}</p>
                    <img src="${artwork.thumbnail.lqip}" alt="${artwork.title}" class="img-fluid" height="200" width="200">
                </div>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}




