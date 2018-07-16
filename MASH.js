function mash(){
    return ("You will live in a " + getHome() + ",and you will have " + getChildrenCount() + " kids" + ", and you'll drive a "+ getCar());
}
console.log(mash());



function getHome(){
     let houses = ["Mansion","Apartment","Shack","House",process.argv[2]];
    if(process.argv[2] != undefined){
        return houses [process.argv[2]];
    }else{
        return [Math.floor(Math.random() * houses.length +1)];
        
        return houses
    }
     


    //  console.log(houses.Random([i]))
};

// console.log(getHome());

function getChildrenCount(){
    let kids = Math.floor(Math.random()* 100+1);

    if(kids >= 50 && process.argv[3] != undefined){
        return(process.argv[3]);
    }else{
        return Math.floor(Math.random()* 100+1)
    }

    return kids;
}

function getCar(){
    let cars = ["lambo","ferarri","BMW",process.argv[4]];

    return cars[Math.floor(Math.random()* cars.length)];
}

// console.log(getChildrenCount());