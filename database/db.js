const mongoose=require('mongoose');
mongoose.set("strictQuery", false);

const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
            console.log('Connected to MongoDb');
    }catch(err){
        console.log("error",err.message);
    }
};

module.exports=dbConnect;