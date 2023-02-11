/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map(obj => {
    if(obj.marks > 50){
      console.log(obj);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(element => {
    if(element.marks > 50){
      console.log(element);
    }
  });
}

function addData() {
  //Write your code here, just console.log
   let obj = {id:4,name:"susan",age:"20",marks:45};
  arr.push(obj);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
   for(let i = 0; i <= arr.length; i++){
    if(arr[i].marks <= 50){
      arr.splice(i, i + 1);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
   let ids = arr.length;
  let arr1 = [
    { id: ids + 1, name: "kapil", age: "22", marks: 85 },
    { id: ids + 2, name: "deepa", age: "28", marks: 80 },
    { id: ids + 3, name: "komal", age: "24", marks: 45 },
  ];
  let array = arr.concat(arr1);
  console.log(array)
}
