const { gql } = require('apollo-server-express') 

module.exports =  gql`
    type Flower {
        id: ID!
        name: String!
        price: Float!
    }

    type Query {
        flowers: [ Flower ]!
    }

    input FlowerInput {
        name: String!
        price: Float!
    }

    type Mutation {
        newFlower(input: FlowerInput): Flower
    }

    type Subscription {
        flowers: [ Flower ]!
    }
`