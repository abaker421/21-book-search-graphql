const typeDefs = `
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type Query {
        currentUserLookup: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String, password: String, username: String): User
    }
`

module.exports = typeDefs