var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = ('triceratops').toUpperCase(),

	textReplace = text.replace('Velociraptor', dinosaur),
	textReplaceHalfLenght = textReplace.length / 2,
	textFinal = textReplace.slice(0, textReplaceHalfLenght);

console.log(textFinal);

