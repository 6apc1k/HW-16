var upper = function* (items) {
  for (var value of items) {
    try {
      yield value.toUpperCase();
    } catch (e) {
      yield null;
    }
  }
}

    var bad_items = ['a', 'B', 1, 'c'];

    for (var item of upper(bad_items)) {
      console.log(item);
    }

    module.exports = upper;