// My api key
let apikey = {
    key: 'babe2624-08ad-4b40-810b-c4157e678c55'
}
// Get Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
        apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Error ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        let texto = "";

        // Get 10 coins and symbols
        for (let i = 0; i < 10; i++) {

        // Show API information

            texto = texto + `

                <div class="media">
                    <img src="coin.jpg" alt="coin" class="align-self-center mr-3" width="100" height="60">
                    <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                        <p>${api.data[i].first_historical_data}</p>

                    </div>
                </div>
                    
                    `;

            document.getElementById("coins").innerHTML = texto;

        }


    })
    .catch((error) => {
        console.error(error.message)
    });