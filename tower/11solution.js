    var inputs = process.argv.slice(2);
    var result = inputs.map(word => word.charAt(0)).reduce((sum, elem) => sum + elem);
    console.log(result);