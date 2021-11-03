const mongoose = require('mongoose')

const connectToDb = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser: true
    }).then(() => console.log('mongoose connected sucessfully'))
    .catch((err) => console.log(err))
}



module.exports = connectToDb