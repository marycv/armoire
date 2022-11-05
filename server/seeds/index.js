const db = require('../config/connection');
const { Article, Closet, User } = require('../models');
const seedArticles = require('./articleData.json');
const seedCloset = require('./closetData.json');
const seedUser = require('./userData.json');



db.once('open', async() => {
    // await User.deleteMany({});
    // await Closet.deleteMany({});
    // await Article.deleteMany({});
    
    
    
    const creator = await User.insertMany(seedUser);
    const location = await Closet.insertMany(seedCloset);
    const clothing = await Article.insertMany(seedArticles);
    
    

    console.log('Looks Saved!')
    process.exit(0);
})
