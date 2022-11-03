const { Article } = require('../models')

const articledata = [
    {
       clothing_type:'Tops',
       color:'Blue' ,
       occassion:'Formal',
       
    },
    {
        clothing_type:'Tops',
        color:'Green' ,
        occassion:'Formal',
        
     },
     {
        clothing_type:'Tops',
        color:'Orange' ,
        occassion:'Formal',
        
     },
     {
        clothing_type:'Tops',
        color:'Red' ,
        occassion:'Formal',
        
     },

     {
        clothing_type:'Bottoms',
        color:'Red' ,
        occassion:'Formal',
        
     },
     {
        clothing_type:'Bottoms',
        color:'White' ,
        occassion:'Formal',
        
     },
     {
        clothing_type:'Bottoms',
        color:'White' ,
        occassion:'Formal',
        
     },
     {
        clothing_type:'Bottoms',
        color:'White' ,
        occassion:'Formal',
        
     },


];

const seedArticles = () => Article.bulkCreate(articledata);

module.exports = seedArticles;