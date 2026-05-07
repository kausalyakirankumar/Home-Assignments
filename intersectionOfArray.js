

function intersection(arr1,arr2)
{
    let result=[];
    for(let i=0;i< arr1.length;i++){
        if(arr2.includes(arr1[i])&&!result.includes(arr1[i]))
        {
            result.push(arr1[i]);
        }
      }
return result;  
}
console.log("Intersection of array is -", intersection([1,2,3,4],[3,4,5,6]) );
