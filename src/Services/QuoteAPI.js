
const helpers = {
    API: async function getQuoteJson(){
        const quote = await fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10", header = {
            headers: {
                'X-Mashape-Key': 'LkFW0i7YOvmshxY4qtCZ1tj8ZpRkp1sozU6jsnvG7rkx7gS2iX',
                'Accept': 'application/json'
            }
        });

        const quoteJSON = await quote.json(); //obtain the json file from fetch
        return Promise.resolve(quoteJSON);
}};

export default helpers;