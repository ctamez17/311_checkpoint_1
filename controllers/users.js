const users = require("../data/index");
const sampleUser = require("../data/sampleUser");

//listUsers
const listUsers = (req, res) => {
    res.json(users);
}

//showUser
const showUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === Number(id));
    if(!foundUser){
        res.status(404).send({error: "User doesn't exist."});
    }else{
        res.json(foundUser);
    }
}

//createUser
const createUser = (req, res) => {
    users.push(sampleUser);
    res.json(users);
}

//updateUser
const updateUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === Number(id));
    if(!foundUser){
        res.status(400).send({error: "Bad Request"});
    }
    for(let i=0; i < users.length; i++){
        if(users[i].id === Number(id)){
            users[i].name = sampleUser.name;
        }
    }
    res.json(users);
}

//deleteUser
const deleteUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === Number(id));
    if(!foundUser){
        res.status(400).send({error: "Bad request."})
    }
    for(let i = 0; i < users.length; i++){
        if(users[i].id === Number(id)){
            users.splice(i, 1);
        }
    }
    res.json(users);
}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}