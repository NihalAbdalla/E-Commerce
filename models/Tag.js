const {Model} = require('sequelize');
const sequelize = require('../config/eCommerceConnection');

class Tag extends Model {}

Tag.init(
    {
        id: '',
        tag_name: '',
    }
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag'
    }
);