const db = require('../config/connection');
const { User, Article } = require('../models');
const seedUser = require('./userData.json');
const seedArticles = require('./articleData.json');

db.once('open', async() => {
    try {
     await User.deleteMany({}) ;
     await Article.deleteMany({}) ;   

    await User.create(seedUser);
    await Article.create(seedArticles);
    
    

    console.log('Looks Saved!')
    process.exit(0);
    }
    catch(err){
    throw err;
    }
});
