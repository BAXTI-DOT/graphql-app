const http = require('http')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const app = express()
const modules = require('./modules')
const PORT = process.env.PORT || 4040

const server = new ApolloServer({
    modules,
    introspection: true,
    playground: true
})

const httpServer = http.createServer(app)

server.applyMiddleware({ app })
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: PORT}, () => {
    console.log(`http://localhost:${PORT}` + server.graphqlPath)
    console.log(`ws://localhost:${PORT}` + server.subscriptionsPath)
})