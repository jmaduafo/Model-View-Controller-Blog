const { User } = require('../models');

const userData = [
    {
        username: "devopps",
        email: "londontown@gmail.com",
        password: "necrobaby",
        
    },
    {
        username: "Ayinda_Ler12",
        email: "casuallover45@yahoo.com",
        password: "pastasauce23",
        
    },
    {
        username: "techexpert",
        email: "sexytechy@gmail.com",
        password: "lordes",
        
    },
    {
        username: "apple_enthusiast",
        email: "applepie@hotmail.com",
        password: "handsomedeville",
        
    },
    {
        username: "piecrust",
        email: "fightclub23@gmail.com",
        password: "pancakemix",
        
    }
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUsers;