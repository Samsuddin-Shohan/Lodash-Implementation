const difference = (arr1,arr2)=>{
    const inspectedArray = [...arr1];
    const excludedArray = [...arr2];
    for(let i = 0;i<inspectedArray.length;i++){
        for(let j = 0;j<excludedArray.length;j++){
            if(inspectedArray[i]===excludedArray[j]){
                inspectedArray[i]=undefined;
            }
        }
    }
    return inspectedArray.filter(item => item);

}
module.exports = difference;