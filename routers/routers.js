const express = require ('express')
const router = express.Router()
const ApiError = require('../utils/apiErrors')
const globalError = require ('../middleware/errorMiddleware')
const {SubCategory ,allSubCategory, creatSubCategory, updateSubcategory, deleteSubcategory,}=require('../controller/subCategoryController')
const {product , allproducts ,createproduct , updateproduct , deleteproduct} = require ('../controller/productController')
router.get('/api/v1/Category/:id',product)
router.get('/api/v1/Category',allproducts)
router.post('/api/v1/Category',createproduct)
router.put('/api/v1/Category/:id',updateproduct)
router.delete('/api/v1/Category/:id',deleteproduct)


router.get('/api/v1/subcategory/:id',SubCategory)
router.get('/api/v1/subcategory',allSubCategory)
router.post('/api/v1/subcategory',creatSubCategory)
router.put('/api/v1/subcategory/:id',updateSubcategory)
router.delete('/api/v1/subcategory/:id',deleteSubcategory)


router.all("*" , (req , res  ,next) => {
    next(new ApiError (`can't find this route: ${req.originalUrl}`, 400))
})
router.use(globalError)




module.exports = router