var fs = require("fs");

fs.readFile("file1.txt", "utf-8", (err, data) => {
  var txtContent = data;
  fs.readFile("file2.txt", "utf-8", (err, data1) => {
    txtContent += data1;
    fs.writeFile("file3.txt", txtContent, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
      });
  });
});

// Create a module -- some functions
//1. A function with arrOfObj as a parameter, searchSalary ; return pos of firstElement which has a particular salary -- arr.findIndex
var empArr = [
    {
        empId: 101, empName: "Asha", salary: 1001, deptId: "D1"
    },
    { empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
    { empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
    { empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
    { empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
    { empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
    { empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }
];

function f1(arrObj,searchSalary) {
    return arrObj.findIndex(item => item.salary == searchSalary);
}

var salIndex = f1(empArr, 4000);
console.log(salIndex);

// 2. Add an obj at a particular index position in the arrOfObj
function addEmp(arrObj,emp,position) {
    arrObj.splice(position,0, emp);
}

addEmp(empArr, { empId: 108, empName: "P Saurav", salary: 73800, deptId: "D9" }, 2);
console.log(empArr);

// 3. Remove an obj from the arrOfObj
function removeEmp(arrObj,emp) {
    var pos = 0;
    arrObj.forEach((element, i) => {
        if (element.salary == emp.salary) {
            pos = i;
        }
    });
    arrObj.splice(pos, 1);
}
removeEmp(empArr, { empId: 106, empName: "Pran", salary: 4000, deptId: "D3" });
console.log(empArr);
// 4. Get a particule emp details from arrObj
function getEmpDetails(arrObj,empId) {
    return arrObj.find(item => item.empId == empId);
}

var empDetails = getEmpDetails(empArr, 102);
console.log(empDetails);