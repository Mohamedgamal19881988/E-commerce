const express = require ('express')
const router = express.Router()
const { allSubCategory, SubCategory, creatSubCategory, updateSubcategory, deleteSubcategory } = require ('../controller/subCategoryController')
router.get('/api/v1/subcategory',allSubCategory)
router.get('/api/v1/subcategory/:id',SubCategory)
router.post('/api/v1/subcategory',creatSubCategory)
router.put('/api/v1/subcategory/:id',updateSubcategory)
router.delete('/api/v1/subcategory/:id',deleteSubcategory)

module.exports = router