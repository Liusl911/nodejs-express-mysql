const fs = require('fs')
fs.writeFile(__dirname + '/files/2.txt', 'abcdef', function(err){
    console.log(err)
})