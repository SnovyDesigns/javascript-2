function getTriangleArea (a, h) {

	if ((a > 0) && (h > 0)) {

		var result = a*h/2;
		return result;

	} else {

		return 'Nieprawidłowe dane - podaj wartości większe od 0';

	}

}

console.log(getTriangleArea(10, 15));

var triangle1Area = getTriangleArea(5, 75),
	triangle2Area = getTriangleArea(0, 15),
	triangle3Area = getTriangleArea(2, -15);