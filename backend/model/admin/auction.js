const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auctionSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    image: [{
        url: {
          type: String
        },
        filename: {
          type: String
        }
      }],
    
});


const Auction = mongoose.model("Auction", auctionSchema);

module.exports = {
    Auction
}