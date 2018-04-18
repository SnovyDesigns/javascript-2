var list = document.getElementById('list'),
    add  = document.getElementById('addElem'),
    rem  = document.getElementById('remElem'),
    listElements = document.getElementsByTagName('li');

add.addEventListener('click', function (e) {
	
	var element = document.createElement('li');
	element.innerHTML = 'Item ' + listElements.length;
	list.appendChild(element);

}, false);

rem.addEventListener('click', function (e) {
	
	list.removeChild(list.querySelector(':last-child'));

}, false);

