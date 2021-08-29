var fs = require('fs');

/**
 *
 * @param file
 * return {width : something, height : something, grid : ....} for now;
 */
function read(file){
    let data = fs.readFileSync(file,{ encoding : 'utf8', flag : 'r'}).split("\n")
    let height = parseInt(data[1].split(" ")[1])
    let width = parseInt(data[2].split(" ")[1])
    let grid = data.slice(4, data.length).map(function(e){
        e = e.slice(0, e.length-1)
        return e
    })
    return {width : width, height : height, grid : grid}
}

module.exports = read;

// testing the read file function
var obj = read('public/maps/kiva.map');
console.log(obj);