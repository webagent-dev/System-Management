require('dotenv').config()
const express = require('express');
const app = express()
const port = 8080
const host = `server started at http://localhost:${port}`
const connectToDb = require('./db/database')
const DepartRouter = require('./routes/departRouter')
const EmployRouter = require('./routes/employRouter')
const cors = require('cors')


// middle ware

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


// app.get('/', (req,res) => {
//     res.status(200).json({msg:'welcome to my webpage'})
// })
app.use('/api/v1/department', DepartRouter)
app.use('/api/v1/employee', EmployRouter)

const start = async()=> {
   try{
    await connectToDb(process.env.MONGO_URL)
    app.listen(port, () => console.log(host))
   }catch(err){
       console.log(err)
   }
} 


start()



