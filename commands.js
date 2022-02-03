const fs = require('fs')
const bcrypt = require('bcrypt');

//add users
const add = async (username, email, Password, address) => {
    let userDetails = [];
    const salt = await bcrypt.genSalt(10);

    let password = await bcrypt.hash(Password, salt)
    // let hashedPassword =hashed.toString()

    try {
        userDetails = JSON.parse(fs.readFileSync("userDetails.json"))
    } catch (e) {
        // console.log(e)
    }

    let index = userDetails.findIndex((userMail) => userMail.email === email)


    if (index === -1) {
        userDetails.push({ username, email, password, address })
    } else {
        console.log(`User already exist`)
    }

    fs.writeFileSync('userDetails.json', JSON.stringify(userDetails));
}

//removing function

const remove = (email) => {
    let userDetails = [];

    try {
        userDetails = JSON.parse(fs.readFileSync("userDetails.json"))
    } catch (e) {
        // console.log(e)
    }

    const filteredList = userDetails.filter((userMail) => userMail.email != email)
    fs.writeFileSync('userDetails.json', JSON.stringify(filteredList));
}


//list userDetails

const list = () => {
    let userDetails = [];


    try {
        userDetails = JSON.parse(fs.readFileSync("userDetails.json"))
    } catch (e) {
        return []
    }

    userDetails.forEach(element => {
        console.log(element);
    });

    

}

//read particular item
const read = (email) => {
    let userDetails = [];

    try {
        userDetails = JSON.parse(fs.readFileSync("userDetails.json"))
    } catch (e) {
        // console.log(e)
    }


    const filteredList = userDetails.filter((userMail) => userMail.email === email)
    console.log(filteredList)

}

//update

const update = (username, email, address) => {

    let userDetails = [];

    try {
        userDetails = JSON.parse(fs.readFileSync("userDetails.json"))
    } catch (e) {
         console.log(e)
    }

    let index = userDetails.findIndex((userMail) => userMail.email === email);
    console.log(index)

    if (index === -1) {
      console.log("No such email found.");
    } else {
        userDetails[index].username = username;
        userDetails[index].address = address;
    
    }
    
    fs.writeFileSync("userDetails.json", JSON.stringify(userDetails));
    
}



module.exports = { add, remove, list, read, update }