const {Model} = require('sequelize');
const sequelize = require('../config/eCommerceConnection');

class ProdcutTag extends Model {}

ProdcutTag.init(
    {
        id: '',
        product_id: '',
        tag_id: '',
    }
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'productTag'
    }
);