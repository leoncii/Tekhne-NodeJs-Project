module.exports = {
    api:{
        port: process.env.API_PORT || 4444
    },
    mongo: {
        host: process.env.MONGO_HOST || '',
        user: process.env.MONGO_USER || '',
        password: process.env.MONGO_PASSWORD || '',
        database: process.env.MONGO_DATABASE || ''
    }
}