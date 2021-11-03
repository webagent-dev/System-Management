const mongoose = require('mongoose')
const autoIcrement = require('mongoose-auto-increment')

// autoIcrement.initialize( process.env.MONGO_URL)
const connection = mongoose.createConnection(process.env.MONGO_URL)

autoIcrement.initialize(connection)


const DepartmentSchema = new mongoose.Schema({
    departmentId: {
        type: Number,
    },
    departmentName:{
        type: String,
        required: [true, 'please enter a valid department name'],
        unique: [true, 'department name must be unique']
    }
},{timestamps: true})


DepartmentSchema.plugin(autoIcrement.plugin, {model: 'DepartmentSchema',field: 'departmentId', startAt: 1})
module.exports = mongoose.model('Depart', DepartmentSchema)