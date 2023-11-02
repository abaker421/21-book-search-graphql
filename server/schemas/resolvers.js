const { GraphQLError } = require('./graphql')
const { User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        currentUserLookup: async (parent, { username, email, password, savedBooks }, contextValue, info) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })
                return user
            }
            throw new GraphQLError("Login Required")
        }
    },
    Mutation: {
        login: async (parent, {email, password}, context, index) => {
            const user = await User.findOne({email})

            if (!user) {
                throw new GraphQLError("No User found")
            }

            const verifiedPW = 
        }
    }
}