const chunk = (arr, num) => {
  // console.log(arguments.length);

  const temp = [...arr];
  const numberOfArray = Math.ceil(temp.length / num);
  let result = [];
  for (let i = 0; i < numberOfArray; i++) {
    result.push([]);
  }
  //console.log(result);
  let idx = 0;
  for (let i = 0; i < temp.length; i += num) {
    let temp1 = i + num;
    for (let j = i; j < temp1; j++) {
      if (temp[j]) {
        result[idx].push(temp[j]);
      }
    }
    idx++;
  }
  //console.log(temp);
  return result;
};
module.exports = chunk;