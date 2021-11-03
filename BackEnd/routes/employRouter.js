const express = require('express')
const router = express.Router()
const { getEmployee,createEmployee,getSingleEmployee,updateEmployee,deleteEmployee} = require('../controller/employee')



router.route('/').get(getEmployee).post(createEmployee)
router.route('/:id').get(getSingleEmployee).patch(updateEmployee).delete(deleteEmployee)



module.exports = router