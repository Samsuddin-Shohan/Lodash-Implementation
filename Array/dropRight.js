const dropRight = (arr,n=1) => {
    const array1 =[...arr];
    if(array1.length<n){
        return [];
    }
    const result = array1.slice(0,array1.length-n);
    
    return result;

}
module.exports = dropRight;