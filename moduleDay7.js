const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const port = 3000;
var empArr = [{ empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
{ empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
{ empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
{ empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
{ empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
{ empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
{ empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }]

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/employees", (request, response) => {
    response.send(empArr);
})

app.post("/employees/addNewProducts", (request, response) => {
    empArr.push(request.body);
    response.send("Employee Details added successfully")
})

app.patch("/employees/updateNewProducts", (request, response) => {
    empArr.push(request.body);
    empArr.forEach(item => {
        if (item == response.body[0].empId) {
            item = response.body;
        }
    });
    response.send("Employee updated successfully")
})


app.delete("/employees/deleteNewProducts", (request, response) => {
    empArr.push(request.body);
    var pos =0;
    empArr.forEach((item, i) => {
        if (item == response.body[0].empId) {
           pos = i;
        }
    });
    empArr.splice(pos, 1);
    response.send("Employee deleted successfully")
});


app.listen(port, () => {
    console.log(`Server started at port : ${port}`);
})


// 2 

const fs = require("fs");
const { readFile } = require("fs");// destructuring; var readFile=require("fs").readFile

const { MongoClient } = require("mongodb");// destructuring

const uri = "mongodb://127.0.0.1:27017/";// connection string

const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });


async function run() {

    try {
        var client = await mongoClient.connect()
        var dbName = client.db("dxcDb");
        var collName = dbName.collection("employess");
        const insertDoc = { "empId": 202, "empName": "tara" };
        await collName.insertMany(empArr).then((res) => {
            console.log("Response of insertMany:", res);
        });
    }
    catch (err) {
        console.log("Error", err)
    }

}
run();