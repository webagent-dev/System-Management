const Departs = require('../models/departModel')


const getDepartment = async(req, res) => {
   try{
        const depart = await Departs.find({})
        res.status(200).json({depart})
   }catch(err){
       console.log(err)
   }
}

const createDepartment = async(req, res) => {
    try{
         const depart = await Departs.create(req.body)

            res.status(200).json({depart})
    }catch(err){
        console.log(err)
    }
 }

 const getSingleDepartment = async(req, res) => {
    try{
            const {id:taskId} = req.params
            if(!taskId){
                res.status('404').json({msg: 'please enter a valid department id'})
               
            }else{
            const depart = await Departs.findOne({_id:taskId})
            res.status(200).json({depart})
            }
            
    }catch(err){
        console.log(err)
    }
 }

 
 const updateDepartment = async(req, res) => {
    try{
        let {id:taskId} = req.params
        if(taskId){
            const depart = await Departs.findByIdAndUpdate({_id:taskId}, req.body,{
                new: true,
                runValidators: true
            })
            res.status(200).json({depart})
        }else{
            res.status(404).json({msg: 'please enter a valid department id'})
        }
    }catch(err){
        console.log(err)
    }
 }

 const deleteDepartment = async(req, res) => {
    try{
        const {id:taskId} = req.params
        if(!taskId){
            res.status('404').json({msg: 'please enter a valid department id'})
           
        }else{
        const depart = await Departs.findOneAndDelete({_id:taskId})
        res.status(200).json({depart})
        }
        
}catch(err){
    console.log(err)
}
 }


 module.exports = {
    getDepartment,
    createDepartment,
    getSingleDepartment,
    updateDepartment,
    deleteDepartment
 }