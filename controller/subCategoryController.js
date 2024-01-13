const ApiError = require('../utils/apiErrors')
const subCategoryModel = require ('../schemas/subCategorySchema')
const categoryModel = require ('../schemas/categorySchema')



exports.creatSubCategory = async function (req,res) {
try {
    
    const Createdcategory = await subCategoryModel.create(req.body )
    return res.json({ "message": "SubCategory created Successfully", data: Createdcategory })    

        
} catch (error) {
res.status(400).json({"message":"unable to create this category"})

}

}

exports.allSubCategory = async function (req,res) {
try {
const page = req.query.page *1  || 1
const limit = req.query.limit *1  || 5
const skip = (page-1)*limit
const Category = await subCategoryModel.find().skip(skip).limit(limit)
return res.json({ "Subcategories count":Category.length , page, data: Category })


} catch (error) {
return res.status (400).send ({message:error})

}

}

exports.SubCategory =  async (req,res,next ) => {
try {

const { id } = req.params
const category = await subCategoryModel.findById (id)
if(!category){
    return res.status(404).json ({ "message": "unable to find subcategory"})

}else{
    return res.json({ "message": "Done", data: category })

}
} catch (error) {

next(new ApiError( `unable to find categry for this id`,404))
}
}

exports.updateSubcategory = async function (req,res , next) {
try {
await subCategoryModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
return res.json({ "message": "Subcategory Updated Successfully", data: subCategoryModel })

} catch (error) {

}

next(new ApiError( `unable to update this Subcategory`,404))



}

exports.deleteSubcategory = async function (req,res,next) {
try {
    
    await  subCategoryModel.findByIdAndDelete({_id : req.params.id})
    return res.json ({"Message":"Subcategory deleted successfuly"})

    
} catch (error) {
    next(new ApiError( `unable to delete this Subcategory`,404))
}}



