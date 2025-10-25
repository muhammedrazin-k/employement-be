const express=require('express')
const { addEmployeeController, viewEmployeeController, editEmployeeContrller, deleteEmployeeController } = require('../controller/employeeController')

const router=express.Router()

router.post('/add-employee',addEmployeeController)
router.get('/get-allemployee',viewEmployeeController)
router.put('/edit-employee/:empId',editEmployeeContrller)
router.delete('/delete-employee/:empId',deleteEmployeeController)

module.exports=router