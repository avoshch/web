
 //let arr1 = [1, 2, 3];
 //let arr2 = ["red", "black"];

// console.log(arr1[0]);
//console.log(arr2[1]);

// let arr3 = new Array(1, 2, 3); 
// let arr4 = new Array("red", "black")

// console.log(arr3[0]);
// console.log(arr4[1]);

// let arr6 = new Array(10);
// console.log(arr6[0]);
 
// let arr7 = new Array("red");
// console.log(arr7[0]);


// let arr1 = ["red", "black","green","blue"];
 //console.log(arr1[0]);
 //arr1[0]='green';
 //console.log(arr1[0]);
 //console.log(arr1.length);
 //arr1[2]='blue';
 //console.log(arr1.length);
 //delete (arr1[0]);
 //console.log(arr1.length);
 //console.log(arr1[0]);
 



 // let arr4 = new Array(10);// ![10], [,,,,,,,,,,]
// let arr5 = new Array("Word"); //['Word']

// console.log(arr1[1]);
// arr2[0] = "blue";
// arr2[2] = "red";

// arr1.length = 2;
// arr1.length = 5;


//let arr1 = ["red", "black","green","blue"];
//arr1[10]="pink";

 for (let index = 0; index < arr1.length; index++)
         console.log(arr1[index]);

         

//let arr1 = ["red", "black","green","blue"];

arr1.length=15;

 for (let element of arr1)
     console.log(element);

// //присвоєння по посланню


let oldArr = ["red", "black","green","blue"];
let newArr = oldArr;
oldArr[0]="pink"
console.log(newArr[0]);
newArr[0]="red";
console.log(oldArr[0]);
oldArr[4]="pink";
console.log(newArr[4]);


ArrNum=[1,2,3,4,5,6,7];
console.log(ArrNum.toString());
console.log(ArrNum.join('*'));

/*
let arr1 = ["red", "black","green","blue"];
console.log(arr1.length);
console.log(arr1.pop());
console.log(arr1.length);
*/

/*
let arr1 = ["red", "black","green","blue"];
console.log(arr1.shift());
console.log(arr1[0]);
console.log(arr1.unshift("pink"));
console.log(arr1[0]);
*/
/*
let arr = ["red", "black","green","blue"];
arr.splice(2, 0, "pink", "yellow");
console.log(arr);
console.log(arr.splice(0, 2));
*/

/*
let arr = ["red", "black","green","blue"];
console.log(arr.slice(1, 3));
console.log(arr.slice(1));
*/
/*
let arr = ["red", "black","green","blue"];
console.log(arr.slice(1, 3));
console.log(arr.slice(1));
*/

/*
let arr = ["red", "black","green","red","blue"];
console.log(arr.indexOf("red"));
console.log(arr.indexOf("magenta"));
console.log(arr.lastIndexOf("red"));
*/


// let newArr = arr2;
// newArr[0] = "green";
// console.log(arr2);

// function ChangeArray(arr) {
//     arr[1] = arr[0];
// }

// ChangeArray(arr2);

//методи масиву

//let arr = ["red", "green", "blue", "grey"];
//let arr2 = ["pink", "yellow"];
/*
console.log(arr.concat(["white", "black"]));
console.log(arr.concat(arr2));
*/


//spred
let concatedArray = [...arr, ...["white", "bleck"]];
console.log(concatedArray);

console.log(arr.every(element => element.length > 4));

// console.log(arr.fill("yellow", 1, 3 ));
let zeroVector = new Array(50).fill(0, 0, 50);

/*
console.log(arr.find(element=>element[0]=="g"));
console.log(arr.find(element=>element[0]=="d"));

console.log(arr.findIndex(element=>element[0]=="g"));
console.log(arr.findIndex(element=>element[0]=="d"));
*/

/*
let arr = ["red", "green", "blue", "grey"];
console.log(arr.every(element=>element[0]=='g'));
console.log(arr.every(element=>element.length<10));
*/
/*
let arr = ["red", "green", "blue", "grey"];
console.log(arr.some(element=>element[0]=='g'));
console.log(arr.some(element=>element.length<1));
*/

//let arr = ["red", "green", "blue", "grey"];


//console.log(arr.filter(element => element[0] == "g"));



//arr = arr.filter();

console.log(arr.find(element => element[0] == "g"));
console.log(arr.find(element => element[0] == "x"));

console.log(arr.findIndex(element => element[0] == "g"));
console.log(arr.findIndex(element => element[0] == "x"));

/*
let arr = ["red", "green", "blue", "grey"];

arr.forEach(element => console.log(element.toUpperCase()));
console.log(arr);

arr.forEach((element,index,array) => (array[index]=element.toUpperCase()));
console.log(arr);
*/


// arr.forEach((element, index, array) => array[index] = element.toUpperCase() );
/*
console.log(arr.includes("red"));

console.log(arr.indexOf("blue")); //findIndex(x=>x == "blue")


arr[4] = "blue";
console.log(arr.lastIndexOf("blue"));

let arr = ["red", "green", "blue", "grey"];

console.log(arr.map(
    element => element.toUpperCase()
));

console.log(arr);
*/


arr.push("white");
console.log(arr.pop());
arr.unshift("white");
console.log(arr.shift());


let arr = ["red", "green", "blue", "grey"];

console.log(arr.reduce(
    (prev, curent) => prev + "..." + curent
));

console.log(arr.reduce(
    (prev, current) => prev + current.length, 0
));

console.log(arr.reduce(
    (prev, current) => current.length > prev.length ? current : prev
));



const myArr = Array.from("ABCDEFG");
console.log(myArr[3])


// [].reduce((p,c)=>0); Reduce of empty array with no initial value
console.log(arr.reduce(
    (prev, current) => current.length > prev.length ? current : prev
));

console.log(arr.reverse());

arr.sort(
    (el1, el2) => el1.length - el2.length
);

arr.sort(
    (el1, el2) => {
        if (el1 > el2)
            return 1;
        if (el1 < el2)
            return -1;
        return 0;
    }
)

console.log(arr.some(element => element.length > 4));

console.log(arr.slice(1, 3));
console.log(arr.slice(-2));

console.log(arr.splice(1, 2, "insert"));