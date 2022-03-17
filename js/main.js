const apiPath = "https://pokeapi.co/api/v2/pokemon"

const loadPokemons = async() => {
	try{
		let answerApi = await fetchingData(`${apiPath}`)
		if(answerApi.status === 200){
			//data answer for api
			let data = await answerApi.json()
			data.results?.forEach(pokemon => {
				renderPokedata(pokemon)
			})
		}
		else{
			console.log(`Error request ${answerApi.status}`)
		}
	}
	catch(err){
		console.log(err.message)
	}
}



const fetchingData = (url) => { return fetch(url) }

const renderPokedata = (pokeData) => {
	const allPokemons = document.querySelector("#content")
	let pokeCointainer = document.createElement('div') // invividual pokemon
	let pokeTitle = document.createElement('h3')
	pokeTitle.createTextNode(`${pokeData.name}`)
}

loadPokemons()