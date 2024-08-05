
//1. 
const user = {
    name:"abc",
    adddress :{
        street:"abc12";
    }
}


const {name, address:{street}} = user ;





const user1 = null;


const {name:name1, address:address1} = {...user1} ;

// {...user1} spreads the result into an empty object {}


const {street:street1} = {...address1};