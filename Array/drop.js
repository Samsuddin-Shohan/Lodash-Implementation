const drop = (arr,n=1) => {
    const array1 =[...arr];
    const result = [];
    for(i=n;i<array1.length;i++){
        result.push(array1[i]);
    }
    return result;

}
module.exports = drop;