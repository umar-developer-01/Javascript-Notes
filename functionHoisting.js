// Javascript has function hoisting

// this will work with traditional function declaration 
cool()

function cool(){
    console.log("This is Super Cool");
}



// this will not work

cool()

let cool = function() {
    console.loh("Hey");
}

