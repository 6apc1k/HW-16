var factorial = function* (n){
	var val = 1;
	yield val;
    for (var i = 2; i <= n; i++) {
        val *= i;
        yield val;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}

module.exports = factorial;