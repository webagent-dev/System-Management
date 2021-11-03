const mongoose = require('mongoose')
const autoIcrement = require('mongoose-auto-increment')

// autoIcrement.initialize( process.env.MONGO_URL)
const connection = mongoose.createConnection(process.env.MONGO_URL)

autoIcrement.initialize(connection)


const EmployeeSchema = new mongoose.Schema({
    employeeId: {
        type: Number,
    },
    employeeName:{
        type: String,
        required: [true, 'please enter a valid employee name'],
        unique: [true, 'employee name must be unique']
    },
    employeeDepartment:{
        type: String,
        required: [true, 'please enter valid employee department'],
        mixlength: [50, 'employee employee length must not more than fivety']
    },
    photoFile:{
        data: Buffer,
        contentType: String,
        default: ''
    }
},{timestamps: true})


EmployeeSchema.plugin(autoIcrement.plugin, {model: 'EmployeeSchema',field: 'employeeId', startAt: 1})
module.exports = mongoose.model('Employ', EmployeeSchema)