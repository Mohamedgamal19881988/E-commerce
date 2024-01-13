const mongoose = require ('mongoose')
const subCategorySchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        unique:[true , 'subCategory name must be unique'],
        minlength:[2 , 'To short subCategory name'],
        maxlength:[15 , 'To long subCategory name']
    },
slug :{
    type:String,
    lowercase:true
},
category:{
    type:mongoose.Schema.ObjectId,
    ref:'category',
    required:[true,'Subcategory shuld be added to main category']
}
},{timestamps:true})

module.exports = mongoose.model('subcategory' , subCategorySchema)