function concat(arr) {
  const result = [...arr];
  for (let i = 1; i < arguments.length; i++) {
    if (typeof arguments[i] !== "object") {
      result.push(arguments[i]);
    } else {
      for (let j = 0; j < arguments[i].length; j++) {
        //console.log(arguments[i][j]);
        result.push(arguments[i][j]);
      }
    }
  }
  return result;
}
module.exports = concat;