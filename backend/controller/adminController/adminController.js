const {User} = require('../../model/user/register')
const {Genre} = require('../../model/admin/genre')

module.exports = {

    getMember: async(req,res) =>{
        console.log("okay");
        await User.find().select('-password')
       .then((docs)=>{
        res.send({success:true, users:docs})
       }).catch((e)=>{
        res.send(e)
       })
    },

    addGenre: async(req,res) =>{
    const genre = req.body.genre
    const exist = await Genre.find({genre:{ $regex: new RegExp(`^${genre}$`, 'i') }})
    if(exist.length === 1){
        res.send({exist:true})
    }else{
        const newgenre = new Genre({
            genre:genre
        })
        const data = await newgenre.save()
        if(data){
            res.send({success:true})
        }
    }
    },

    getGenre: async(req,res) =>{
    await Genre.find()
    .then((docs)=>{
        res.send({success:true, genre:docs})
    }).catch((e)=>{
        res.send(e)
    })
    }

}