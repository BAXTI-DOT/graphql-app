const http = require('http')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const app = express()
const modules = require('./modules')

const server = new ApolloServer({
    modules,
    introspection: true,
    playground: true
})

const httpServer = http.createServer(app)

server.applyMiddleware({ app })
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: 4040}, () => {
    console.log('http://localhost:4040' + server.graphqlPath)
    console.log('ws://localhost:4040' + server.subscriptionsPath)
})