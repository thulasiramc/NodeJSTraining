var arr = [10, 20, 30, 40, 50];
// Create a function which returns the squares of all the elements without using the map method
var arrMulti = [];
arr.forEach(item => arrMulti.push(item * item));

console.log('----------> Multiple', arrMulti);

// Create a function which takes in a string which holds a phoneNumber and returns the masked version
function createMaskOnPhoneNumber(phNo) {
    const endDigits = phNo.slice(0, 3);
    const endDigits1 = phNo.slice(7, 10);
    const endDigits2 = "".padStart(4, '*');
    return endDigits.concat(endDigits2).concat(endDigits1);
}
var res = createMaskOnPhoneNumber("1234567890"); //123****890
console.log('-> Mask Ph no', res);

// Create a function which takes in array of objects and returns the obj which has the highest salary
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

function getHighestSalaryEmp(empArr1) {
   return empArr1.sort((a, b) => b.salary - a.salary)[0];
}
var obj = getHighestSalaryEmp(empArr);//{empId:106,empName:"Pran",salary:4000,deptId:"D3"}

console.log('---------> highest salary', obj);