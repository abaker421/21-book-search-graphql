import {gql} from "@apollo/client"

export const GET_CURRENT_USER = gql`
query GET_CURRENT_USER {
    getCurrentUser{
        User {
            _id
            username
            password
            savedBooks {
                _id
                authors
                bookId
                description
                image
                link
                title
            }
        }
    }
}
`