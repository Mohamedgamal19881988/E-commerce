const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema ({
name:{

type:String,
require:[true,'Category name is required'],
uniqe:[true , 'Category must be uniqe'],
minlength:[3,'To short Category name'],
maxlength:[15,'To long Category']
},

image:String
} ,
{timestamps:true})

module.exports = mongoose.model('category',categorySchema)