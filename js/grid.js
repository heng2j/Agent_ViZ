//
// var rowNum = 5;
// var colNum = 5;


var stateMap =
    [
    ["wall","wall","wall","wall","wall"],
        ["wall","goal","empty","empty","wall"],
        ["wall","empty","empty","empty","wall"],
        ["wall","key","empty","nokey","wall"],
        ["wall","wall","wall","wall","wall"]
];




function getGridData(stateMap, newRowNum, newColNum) {
    var data = new Array();
    var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = 1;
    var width = 50;
    var height = 50;
    var click = 0;

    rowNum = newRowNum;
    colNum = newColNum;

    // console.log("rowNum :", rowNum);
    // console.log("colNum :", colNum);


    // iterate for rows
    for (var row = 0; row < rowNum; row++) {
        data.push( new Array() );

        // iterate for cells/columns inside rows
        for (var column = 0; column < colNum; column++) {
            data[row].push({
                x: xpos,
                y: ypos,
                width: width,
                height: height,
                imgStr: stateMap[row][column],
                id: String(row) + String(column),

                click: click
            })
            // increment the x position. I.e. move it over by 50 (width variable)
            xpos += width;
        }
        // reset the x position after a row is complete
        xpos = 1;
        // increment the y position for the next row. Move it down 50 (height variable)
        ypos += height;
    }
    return data;
}

var gridData = getGridData(stateMap);




var config = {
    "avatar_size" : 50
};





// Get the string representation of a DOM node (removes the node)
function domNodeToString(domNode) {
    var element = document.createElement("div");
    element.appendChild(domNode);
    return element.innerHTML;
}


//
//
//
// var grid = d3.select("#grid")
//     .append("svg")
//     .attr("class", "grid_svg")
//     .attr("preserveAspectRatio", "xMinYMin meet")
//     .attr("viewBox", "0 0 300 300")
//     .attr("height", rowNum * 5)
//     .attr("width", colNum * 5)
//     .on( 'mouseenter', function() {
//         // select element in current context
//         d3.select( this )
//             .transition()
//             .attr("height", (rowNum * 5) * 10)
//             .attr("width", (colNum * 5)* 10);
//     })
//     // set back
//     .on( 'mouseleave', function() {
//         d3.select( this )
//             .transition()
//             .attr("height", rowNum * 5)
//             .attr("width", colNum * 5);
//     });
//
// var row = grid.selectAll(".row")
//     .data(gridData)
//     .enter().append("g")
//     .attr("class", "row");
//
//
// var cell = row.selectAll(".cell")
//     .data(function(d) { return d; })
//     .enter().append("svg:g")
//     .attr("class", "cell");
//
//
//
// var column = cell.append("rect")
//     .attr("class","square")
//     .attr("x", function(d) { return d.x; })
//     .attr("y", function(d) { return d.y; })
//     .attr("width", function(d) { return d.width; })
//     .attr("height", function(d) { return d.height; })
//     .style("fill",  function(d) { return   "url(#grump_avatar" + d.id + ")" ; })
//     .style("stroke", "#222")
//     .text(function(d) { return d.imgStr; });
//
//
// var   defs = cell.append('svg:defs');
//
//
//
// defs.append("svg:pattern")
//     .attr("id",  function(d) { return   "grump_avatar" + d.id ; })
//     .attr("width", config.avatar_size)
//     .attr("height", config.avatar_size)
//     .attr("patternUnits", "userSpaceOnUse");
//
// cell.append("svg:image")
//     .attr("xlink:href",  function(d) { return  'http://localhost:8080/images/sprites/' + d.imgStr + '.png'; } )
//     .attr("width", config.avatar_size)
//     .attr("height", config.avatar_size)
//     .attr("x", function(d) { return d.x; })
//     .attr("y", function(d) { return d.y; });
//

