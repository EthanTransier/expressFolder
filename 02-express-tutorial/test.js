const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {
    q: 'Star Wars: A New Hope'
  },
  headers: {
    'X-RapidAPI-Key': 'a12cc0e77bmshf45742d244d7dacp17606djsn6f77d47df792',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};
async function main(){
    try {
	    const response = await axios.request(options);
	    console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
main()
