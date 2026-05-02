function checkNum(num)
{
    if(num>0)
    {
        return "Positive";
    }
    else if(num<0)
    {
return "Negative";
    }
    else{
        return "Neutral"
    }
    
}
let res= checkNum(9)
console.log(res);