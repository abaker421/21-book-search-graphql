const connection = require('../config/connection')
const {User} = require('../models')

connection.once('open', async () => {
    await User.deleteMany()
    await User.create({
        username: 'admin',
        email:  'jim@gmail.com',
        password: '12345',
    })
})

console.log('Seed complete')
process.exit()