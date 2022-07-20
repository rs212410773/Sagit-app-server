const mongoose=require('mongoose');
const {connectionString}=require('../config')

class MongoDb{
    constructor(){}

    async connect(){
        const url=connectionString;
        await mongoose.connect(url);
        console.log(`db connected via mongoose`)
    }
  
}
module.exports=new MongoDb();