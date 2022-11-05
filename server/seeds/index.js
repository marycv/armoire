const db = require('../config/connection');
const { User, Closet, Article } = require('../models');
const seedUser = require('./userData.json');
//console.log(seedUser);
const seedCloset = require('./closetData.json');
const seedArticles = require('./articleData.json');

db.once('open', async() => {
    try {
     await User.deleteMany({}) ;
     await Closet.deleteMany({}) ;
     await Article.deleteMany({}) ;   

    await User.create(seedUser);
    await Closet.create(seedCloset);
    await Article.create(seedArticles);
    
    

    console.log('Looks Saved!')
    process.exit(0);
    }
    catch(err){
    throw err;
    }
});
