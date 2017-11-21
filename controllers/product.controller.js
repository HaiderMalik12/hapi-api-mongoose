const Product = require('../models/product.model');

module.exports = {

    create(req, reply) {

        Product.create({
            title: req.payload.title,
            qty: req.payload.qty,
            price: req.payload.price
        }, (err, product) => {
            if (err) {
                reply(err).code(500);
            }
            return reply.response(product);
        })

    },
    find(req, reply) {

        Product.find({}, (err, products) => {
            if (err) {
                reply(err).code(404);
            }

            return reply(products);
        })

    },
    findOne(req, reply) {


        Product.findById(req.params.id, (err, product) => {
            if (err) {
                reply(err).code(404);
            }

            return reply(product);
        })

    },
    update(req, reply) {
        reply('UPDATE is not implemented yet!')
    },
    delete(req, reply) {
        reply('DELETE is not implemented yet!')
    }

};