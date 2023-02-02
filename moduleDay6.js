const express=require("express");//module to be installed
const path=require("path");
const bodyParser=require("body-parser");

const morgan=require("morgan");


const fs=require("fs");

const port=3000;
var empArr = [{ empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
{ empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
{ empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
{ empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
{ empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
{ empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
{ empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }]

var app=express();
app.use(morgan("combined"));

app.use((request,response,next)=>{
    console.log("Inside the first custom middleware");
    if(request.method == "PUT")
    {
        response.send("PUT request received");

    }
    else
    {
        next();
    }
})
app.use((request,response,next)=>{
    console.log("New middleware");
    next();
})

app.use((request,response,next)=>{
    request.userName="asha";
    next();
})

app.use((request,response,next)=>{
    setTimeout(()=>{
        request.password="asha";
    },5000)
    next();
})
app.use((request,response,next)=>{
    console.log("Password",request.password);// asha or ud
  
    next();
})

app.post("/employees",(request,response)=>{
  empArr.push(request.body);
  response.end("Employee Details added successfully")
})

app.get("/employees",(request,response)=>{
    // return an empArr
    // implicitly set the content-type 
    // no stringify required for sending json data
    response.send(empArr);
})

app.get("/employee",(request,response)=>{
    var pos=empArr.findIndex(item =>item.empName == request.userName);
    if(pos >=0)
    {
        var str1="Employee Details"+ JSON.stringify(empArr[pos]);
        response.send(str1);
    }
    else
    {
        response.sendStatus(404);
        response.send("Employee not found")
    }
    response.send(empArr);
})
app.get("/login",(request,response)=>{
    var filePath=path.join(__dirname,"public","login.html");
    response.sendFile(filePath);

})

app.get("/images",(request,response)=>{
    var filePath=path.join(__dirname,"public","flower.jpg");
    response.sendFile(filePath);
})

app.all("/",(request,response)=>{
    response.send("Response from the server");
})


console.log("Express example");
app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})


// 2 question
// Create a table/collection

//RDBMS
// create table employee(
//     empId varchar2(20) primary key,
//     empName varchar(20) not null,
//     salary decimal
// )// create the schema

// db dbDXC

db.employees.insertOne({empId:101,empName:"sara",salary:8890});

db.emplyoees.insertOne({empId:102,empName:"12C",salary:988890});

db.employees.insertOne({empId:103,empName:"Hethvik",salary:67678890});

db.employees.insertOne({empId:104,empName:"Shanuth",salary:87878890});