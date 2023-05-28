console.log("Sport Array and if statement");

let Sport: string[]=["Soccer","Cricket","Baseball","NBA"];

for(let temp of Sport){

    if(temp == "Soccer"){
        console.log(temp+" is most played game in the world");
    }else if(temp == "Cricket"){
        console.log(temp+" is most played game in south asia");
    } else if (temp == "Baseball"){
        console.log(temp+ " is popular game in US/Canada");
    }else{
        console.log("I hate this game "+temp);
    }
}
console.log("Before= "+Sport.length);
Sport.push("Hadudu");
Sport.push("Bull");
console.log("After= "+Sport.length);
