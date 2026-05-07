function userProfile(name){
    console.log("Hello, " + name + "!");
}

double=(num)=>{
    return num*2;
}

setTimeout(function(){
    console.log("This message is delayed by 2 seconds");
}, 2000);

function getUserData(callback){
    setTimeout(function(){
        callback();

    },3000);
}

getUserData(function(){

    console.log("Call back function");

})