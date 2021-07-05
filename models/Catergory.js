const {Model} = require('sequelize');
const sequelize = require('../config/eCommerceConnection');

class Catergory extends Model {}

Catergory.init(
    {
        id: '',
        catergory_name: '',
    }
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'catergory',
    }
);

module.exports = Catergory;
