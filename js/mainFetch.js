const apiPath = "https://pokeapi.co/api/v2/pokemon"
const imagePath = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

const btnPrevious = document.querySelector("#btnPrevious")
const btnNext = document.querySelector("#btnNext")
let currentPage = 0

const loadPokemons = async() => {
	try{
		let answerApi = await fetchingData(`${apiPath}?limit=${currentPage}&offset=${currentPage}`)
		if(answerApi.status === 200){
			//data answer for api
			let data = await answerApi.json()
			data.results?.forEach(pokemon => {
				loadOnePokemon(pokemon)
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

const loadOnePokemon = async (onePokemon) => {
	try{
		let pokemonEnd = await fetchingData(onePokemon.url)
		//data for one pokemon
		let dataRow = await pokemonEnd.json()
		renderPokedata(dataRow)
	}
	catch(err){
		console.log(err.message)
	}
}

const fetchingData = (url) => { return fetch(url) }

const renderPokedata = (pokeData) => {
	const allPokemons = document.querySelector("#content")
	let pokeCointainer = document.createElement('div')
	pokeCointainer.classList.add('card')

	let pokeTitle = document.createElement('h3')
	let pokeNumber = pokeData.id
	pokeTitle.append(document.createTextNode(`${pokeData.name} #${pokeNumber}`))
	pokeCointainer.append(pokeTitle)

	getPokeImage(pokeNumber, pokeCointainer)
	// general div
	allPokemons.appendChild(pokeCointainer)
}

const getPokeImage = (id,div) => {
	let imageDiv = document.createElement('div')
	imageDiv.classList.add('image')

	let pokeImage = document.createElement('img')
	pokeImage.src = `${imagePath}/${id}.png`

	imageDiv.append(pokeImage)
	div.append(imageDiv)
}

//Pagination
btnNext.addEventListener('click', () => {
	if(currentPage <= 898 ){
		currentPage += 20
		loadPokemons()
	}
})

btnPrevious.addEventListener('click', () => {
	if(currentPage >= 20 ){
		currentPage -= 20
		loadPokemons()
	}
})

loadPokemons()