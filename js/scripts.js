function drawTree (levels) {
	
	for (var i = 0; i < levels; i++) {
		
		var star = '';

		for (var j = 0; j <= i; j++) {
			star += '*';
		}

		console.log(star);

	}

}

