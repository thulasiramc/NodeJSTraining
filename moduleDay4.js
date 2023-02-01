var fs = require("fs");
//1. Create a module which will take in a file and create a copy of the file
fs.copyFile("file1.txt", 'copyFile.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});

// 2. Clone a directory and its child files
// function cloneDirectory(path) {

// }

// 3. Function to Check for existence of a file
function doesFileExist(pathtothefile) {
    if (fs.existsSync(pathtothefile)) {
        console.log('exist')
    }
    else {
        console.log('does not exist')
    }
}

doesFileExist("file1.txt");