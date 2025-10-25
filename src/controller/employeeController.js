const employeeModel = require("../model/employeeModel");

const addEmployeeController = async (req, res) => {
  try {
    const { name, email, position, department, salary } = req.body;

    if (!name || !email || !position || !department || !salary) {
      throw new Error("required to fill all the fields ");
    }

    const employee = employeeModel({
      name,
      email,
      position,
      department,
      salary,
    });

    await employee.save();

    res
      .status(200)
      .json({ message: "succesffully added employee", data: employee });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const viewEmployeeController = async (req, res) => {
  try {

    const employee=await employeeModel.find()
    res.status(200).json({message:'got all employee',data:employee})

  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const editEmployeeContrller=async(req,res)=>{
    const{empId}=req.params
    const {name, position , department , salary}=req.body
    try {
        const editedemployee=await employeeModel.findByIdAndUpdate({_id:empId},{name:name,position:position,department:department,salary:salary},{new:true})
        await editedemployee.save()
        res.status(200).json({message:'successfully edited',data:editedemployee})
    } catch (err) {
        console.log(err)
        res.status(400).json({message:'Error'+err.message})
    }
}

const deleteEmployeeController=async(req,res)=>{
    const {empId}=req.params
    console.log(empId)
    try {
        const deleteEmployee=await employeeModel.findByIdAndDelete({_id:empId})
        res.status(200).json({message:`succesfully deleted`})
        
    } catch (err) {
        res.status(400).json({message:'ERROR:'+err.message})
    }
}

module.exports = { addEmployeeController,viewEmployeeController,editEmployeeContrller,deleteEmployeeController };
