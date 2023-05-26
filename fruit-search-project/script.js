const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	results = fruit.filter((item) => {
		return item.toLowerCase().includes(str);
	});
	showSuggestions(results, str);
}

function searchHandler(e) {
	if (input.value === '') {
		clearSuggestions();
	} else {
		search(input.value.toLowerCase());
	}
}

function showSuggestions(results, inputVal) {
	clearSuggestions();

	if (results.length === 0 || inputVal === '') {
		return;
	}
	const list = document.createElement('ul');

	results.forEach((result) => {
		const listItem = document.createElement('li');
		listItem.textContent = result;
		list.appendChild(listItem);
		if (result.toLowerCase().includes(inputVal)) {
			listItem.classList.add('bold');
		}
	});
	suggestions.innerHTML = '';
	suggestions.appendChild(list);
}

function clearSuggestions() {
	// const suggestions = document.querySelector('.suggestions ul');
	suggestions.innerHTML = '';
}

function useSuggestion(e) {
	input.value = e.target.textContent;
	clearSuggestions();
}

input.addEventListener('keyup', searchHandler); 
suggestions.addEventListener('click', useSuggestion);








