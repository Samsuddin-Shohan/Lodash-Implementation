const compact = (arr) => {
  //console.log(arguments[1]);
  const copyOfOriginal = [...arr];
  const result = copyOfOriginal.filter((item) => item);
  return result;
};
module.exports = compact;