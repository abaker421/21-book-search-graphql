const {GraphQLError} = require('./graphql')
const {User} = require('../models')
const {signToken} = require('../utils/auth')

const resolvers = {
    Query: {
        login: async (parent, {username, email, password, savedBooks}, contextValue, info) => {
            const user = await User.findOne({username})

            
        }
    }
}