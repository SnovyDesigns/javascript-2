var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var	allNames = femaleNames.concat(maleNames);
	newName = 'Marian';
	
	
function checkName (newName) {

	if (allNames.indexOf(newName) === -1) {

		allNames.push(newName);
		var res = allNames;

	} else {

		var res = 'Podane imię występuje już w tablicy';

	}

	return res;

}


