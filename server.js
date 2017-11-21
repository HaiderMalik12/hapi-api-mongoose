const Hapi = require('hapi');
const server = new Hapi.Server();
const productRoutes = require('./routes/product.routes');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/youtube_hapi_db',{
    useMongoClient: true
});
mongoose.connection.on('connected',() => {
    console.log('Connected to MongoDB!');
});

mongoose.connection.on('error',(err) => {
    console.log('Error while connecting to mongoDB', err);
});

server.connection({
    port: 3000,
    host: 'localhost'
});

server.route({
    path: '/',
    method: 'GET',
    handler(req, reply) {

        reply('Welcome to HAPI API');
    }
});

server.route(productRoutes);

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server is Running at PORT ${server.info.port}`);
});