const url = 'https://open-weather13.p.rapidapi.com/city/india/IN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8ec49acc00msh2166a607a0b78efp13cdfcjsn72baf93ad22f',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

const start = async () => {
    const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
}
try {
	start();
} catch (error) {
	console.error(error);
}


