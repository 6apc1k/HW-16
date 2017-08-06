var fs = require('fs');

function run (generator) {
  var it = generator(step);

  function step (err, result) {
    if (err) return it.throw(err);
    it.next(result);
  }

  step();
}

run(function* (done) {
  var firstFile;
  try {
    var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
    firstFile = dirFiles[0];
  } catch (err) {
    firstFile = null;
  }

  console.log(firstFile);
});

module.exports = run;