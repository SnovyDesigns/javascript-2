function drawTree (levels) {
	
	for (var i = 0; i < levels; i++) {

		var star = '',
			space = [];

		for (var j = 0; j <= i; j++) {

			if (j === 0) {
				star += '*';
			} else {
				star += '**';
			}

		}

		for (var k = 0; k <= i; k++) {

			space.length = levels - k;

		}

		var joinSpace = space.join(' ');

		console.log(joinSpace+star);

	}

}

