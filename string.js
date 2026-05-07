
//length of last word in a String-Example 1

let s="Hello World"
let words=s.split(" ");
let lastword=words[words.length-1]
console.log("The last word of length is:",lastword.length);

// Example 2

let str=" fly me to the moon "
let t=str.trim();
let words1= t.split(" ");
let lastword1=words1[words1.length-1];
console.log("The last word of length is:",lastword1.length);

//Example 3

function isAnagram(str1,str2){
  let s1 = str1.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  let s2 = str2.toLowerCase().replace(/\s/g, "").split("").sort().join("");

  return s1==s2;
}
console.log(isAnagram("listen","silent"));
console.log(isAnagram("Hello","world"));
