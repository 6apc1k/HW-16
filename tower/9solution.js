const max = process.argv[2];
    let FizzBuzz = function*() {
        let cur = 0;
        while (cur < max) {
        cur++;
        let ret = [];
        if (cur % 3 === 0)
           ret.push('Fizz');
        if (cur % 5 === 0)
           ret.push('Buzz');
        yield ret.join('') || cur;
      }
    }();

    for (var n of FizzBuzz) {
      console.log(n);
    }