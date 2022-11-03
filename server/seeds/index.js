const sequalize = require('../config/connection');
const seedArticle = require('./articleData');
const seedCloset = require('./closetData');
const seedUser = require('./userData');

const seedAll = async () => {
    await sequalize.sync({force: true});
    await seedUser();
    await seedCloset();
    await seedArticle();
    process.exit(0);
};

seedAll();