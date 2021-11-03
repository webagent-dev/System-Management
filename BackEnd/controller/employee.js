const Employ = require('../models/employModel')


const getEmployee = async(req, res) => {
    try{
        const employ = await Employ.find({})
        res.status(200).json({employ})
   }catch(err){
       console.log(err)
   }
}

const createEmployee = async(req, res) => {
    try{
        const employ = await Employ.create(req.body)

           res.status(200).json({employ})
   }catch(err){
       console.log(err)
   }
 }

 const getSingleEmployee = async(req, res) => {
    try{
        const {id:taskId} = req.params
        if(!taskId){
            res.status('404').json({msg: 'please enter a valid employee id'})
           
        }else{
        const employ = await Employ.findOne({_id:taskId})
        res.status(200).json({employ})
        }
        
}catch(err){
    console.log(err)
}
 }

 
 const updateEmployee = async(req, res) => {
    try{
        let {id:taskId} = req.params
        if(taskId){
            const employ = await Employ.findByIdAndUpdate({_id:taskId}, req.body,{
                new: true,
                runValidators: true
            })
            res.status(200).json({employ})
        }else{
            res.status(404).json({msg: 'please enter a valid demployee id'})
        }
    }catch(err){
        console.log(err)
    }
 }

 const deleteEmployee = async(req, res) => {
    try{
        const {id:taskId} = req.params
        if(!taskId){
            res.status('404').json({msg: 'please enter a valid demployee id'})
           
        }else{
        const employ = await Employ.findOneAndDelete({_id:taskId})
        res.status(200).json({employ})
        }
        
}catch(err){
    console.log(err)
}
 }


 module.exports = {
    getEmployee,
    createEmployee,
    getSingleEmployee,
    updateEmployee,
    deleteEmployee
 }