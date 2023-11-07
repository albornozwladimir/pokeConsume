const apiPath = "https://pokeapi.co/api/v2/pokemon"
const imagePath = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

let currentPage = 0
const btnPrevious = document.querySelector("#btnPrevious")
const btnNext = document.querySelector("#btnNext")
const allPokemons = document.querySelector("#content")

//Pagination
btnNext.addEventListener('click', () => {
	if(currentPage <= 878 ){
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

const loadPokemons = async () => {
	try{
		let answerApi = await axios.get(`${apiPath}`, {
			params: {
				limit: '20',
				offset: `${currentPage}`
			}
		})
		if(answerApi.status === 200){
			//data answer for api
			let data = await answerApi.data
			rebootPage()
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
		let pokemonEnd = await axios.get(onePokemon.url)
		//data for one pokemon
		renderPokedata(pokemonEnd.data)
	}
	catch(err){
		console.log(err.message)
	}
}

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

const rebootPage = () => {
	allPokemons.innerHTML = ''
}

loadPokemons()