
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });
async function deleteOne() {

    try {
        var client = await mongoClient.connect()

        var dbName = client.db("dxcDb");
        var collName = dbName.collection("employees");
        // update employees  set salary=1000 for empId:203
        var filterObj = { empId: 204 }
        collName.deleteOne(filterObj)
            .then((res) => {
                if (res.deletedCount > 0) {
                    console.log("Document deleted successfully");
                } else if (res.deletedCount == 0) {
                    console.log("No Data Deleted")
                }
                mongoClient.close();
            })
            .catch((err) => {
                console.log("Error during updation ", err);
                mongoClient.close();
            });
    }
    catch (err) {
        console.log("Error", err)
    }
}

async function deleteMany() {

    try {
        var client = await mongoClient.connect()

        var dbName = client.db("dxcDb");
        var collName = dbName.collection("employees");

        var filterObj = { empId: /^e/i }
        collName.deleteMany(filterObj)
            .then((res) => {
                if (res.deletedCount > 0) {
                    console.log("Documents deleted successfully");
                } else if (res.deletedCount == 0) {
                    console.log("No Data Deleted")
                }
                mongoClient.close();
            })
            .catch((err) => {
                console.log("Error during updation ", err);
                mongoClient.close();
            })
    }
    catch (err) {
        console.log("Error", err)
    }
}
deleteOne();
deleteMany();
