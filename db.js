const mongoose = require("mongoose");


const option = {

    useCreaeIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useNewUrlparser:true,

}


mongoose.connect("mongodb://localhost:27017/W08L01",option).then(
    ()=>{ console.log ("DB connected"),
    (err)=>{console.log(err)}}
)