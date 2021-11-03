const express = require('express')
const router = express.Router()
const { getDepartment,createDepartment,getSingleDepartment,updateDepartment,deleteDepartment} = require('../controller/department')



router.route('/').get(getDepartment).post(createDepartment)
router.route('/:id').get(getSingleDepartment).patch(updateDepartment).delete(deleteDepartment)



module.exports = router