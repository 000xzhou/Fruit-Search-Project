const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if(str) {
		fruit.map(s=> 
			{
				if(s.toLowerCase().startsWith(str)) {
					results.push(s)
				}
			})
	}
	// TODO
	return results;
}

function searchHandler(e) {
	// TODO
	const str = e.target.value.toLowerCase()
	const filterStr = search(str)
	const suggest = showSuggestions(filterStr, str)
	return 
}

function showSuggestions(results, inputVal) {
	// TODO
	suggestions.innerHTML = ''
	results.forEach(element => {
		const li = document.createElement('li')
		li.textContent = element
		suggestions.addEventListener('click', useSuggestion);
		suggestions.appendChild(li)
	});

}

function useSuggestion(e) {
	// TODO
	const text = e.target.innerText
	input.value = text
	suggestions.innerHTML = ''
}

input.addEventListener('keyup', searchHandler);