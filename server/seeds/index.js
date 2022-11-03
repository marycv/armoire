const db = require('../config/connection');
const seedArticle = require('./articleData');
const seedCloset = require('./closetData');
const seedUser = require('../userData');



db.once('open', async() => {
    await seedArticle.deleteMany({});
    await seedCloset.deleteMany({});
    await seedUser.deleteMany({});
    
    
    const clothing = await seedArticle.insertMany();
    const location = await seedCloset.insertMany();
    const creator = await seedUser.insertMany();

    console.log('Looks Saved!')
    process.exit(0);
})
