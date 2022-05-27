const pubsub = require('../../pubsub')
const FLOWER = 'FLOWER'
const model = require('./model')

module.exports = {
    Query: {
        flowers: async() => await model.flowers()
    },
    Mutation: {
        newFlower: async(_, { input: { name, price }}) => {
            const newFlower = await model.newFlower(name, price)
            pubsub.publish(FLOWER)
            return newFlower
        }
    },
    Subscription: {
        flowers: {
            resolve: async() => {
                return await model.flowers()
            },
            subscribe: () => pubsub.asyncIterator([ FLOWER ])
        }
    },
    Flower: {
        id: g => g.flower_id,
        name: g => g.flower_name,
        price: g => g.flower_price
    }
}