//პირველი
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];


let arr4 = arr1.concat(arr2,arr3)
console.log(arr4);

//მეორე

let arr = [-1, -2, -3, 4].some(item => item >0)
console.log(arr);

//მესამე

let array =[23,45,32,5,87,7,3,98]
let lastParameter = array.sort((x,y) => y-x)
console.log(lastParameter[lastParameter.length-1]);

//მეოთხე
let addDiv = document.createElement('div');
addDiv.setAttribute('class', 'wrapper');


let addImg = document.createElement('img');
addImg.setAttribute('src', 'https://wallpapercave.com/wp/wp6124195.jpg');
addImg.setAttribute('alt', 'wallpaper')

let addH2 =document.createElement('h2');
addH2.innerText = "Wallpaper";
addH2.style.color = "#ff0000"
addH2.style.fontSize = "30px"

addDiv.appendChild(addImg);
addDiv.appendChild(addH2);

document.getElementById('homework').appendChild(addDiv);
