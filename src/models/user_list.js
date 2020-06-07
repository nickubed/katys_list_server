'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_list = sequelize.define('user_list', {
    userId: DataTypes.NUMBER,
    listId: DataTypes.NUMBER
  }, {});
  user_list.associate = function(models) {
    // associations can be defined here
  };
  return user_list;
};