const categoryModel = require ('../schemas/categorySchema')
const ApiError = require('../utils/apiErrors')
const { asyncHandle } = require('async-handler-express')





exports.allproducts = async function (req,res) {
    try {
        const page = req.query.page *1  || 1
        const limit = req.query.limit *1  || 5
        const skip = (page-1)*limit
        const Category = await categoryModel.find().skip(skip).limit(limit)
        return res.json({ "Categories count":Category.length , page, data: Category })

        
    } catch (error) {
        return res.status (400).send ({message:error})
        
    }
    
}

exports.product =  async (req,res,next ) => {
   try {
    
    const { id } = req.params
    const category = await categoryModel.findById (id)
    if(!category){
        return res.status(404).json ({ "message": "unable to find"})

    }else{
        return res.json({ "message": "Done", data: category })

    }
   } catch (error) {
    
    next(new ApiError( `unable to find categry for this id`,404))
}
}

exports.createproduct = async function (req,res,next) {
    try {
         
            const Createdcategory = await categoryModel.create(req.body )
            return res.json({ "message": "Product created Successfully", data: Createdcategory })
           
       

               
    } catch (error) {
        next(new ApiError( `unable to create this category : $ {id} ` ,404))
        
    }
    
}

exports.updateproduct = async function (req,res , next) {
   try {
    await categoryModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
    return res.json({ "message": "Category Updated Successfully", data: categoryModel })
    
   } catch (error) {
    
   }

      next(new ApiError( `unable to update this category`,404))
      

    
}

exports.deleteproduct = async function (req,res,next) {
try {
   
  await  categoryModel.findByIdAndDelete({_id : req.params.id})
    return res.json ({"Message":"Category deleted successfuly"})

    
} catch (error) {
    next(new ApiError( `unable to delete this category`,404))
}}