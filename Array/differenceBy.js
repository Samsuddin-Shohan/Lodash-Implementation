const differenceBy = (arr1,arr2,fn)=>{
   const array1 = [...arr1];
   const array2 = [...arr2];
   const array3 = array1.map(item=>fn(item));
   const array4 = array2.map(item=>fn(item));
//    console.log(array3,array4);
   for(let i = 0; i<array3.length;i++){
       for(let j = 0;j<array4.length;j++){
           if(array3[i]===array4[j]){
               array3[i]=undefined;
           }
       }
   }
//    console.log(array3);
   const result = [];
   for(let i = 0;i<array3.length;i++){
       if(array3[i]!==undefined){
           result.push(array1[i]);
       }
   }
   return result;
  

}
// differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);

module.exports = differenceBy;