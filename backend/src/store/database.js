const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const URI = 'mongodb://localhost/mernstack'

let mycon = new MongoClient(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
})
let con = mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
})
if(mycon) {
    con.connection = new Promise((res, rej) => {
        mycon.connect(err => {
            if(err) {
                rej(err)
            }
            console.log('DB CONNECTED!')
            
        })
    })
} 