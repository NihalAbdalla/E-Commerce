const {Model} = require('sequelize');
const sequelize = require('../config/eCommerceConnection');

class Prodcut extends Model {}

Prodcut.init(
    {
        id: '',
        product_name: '',
        price: '',
        stock: '',
        catergory_id: '',
    }
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
);

module.exports = Product;
