'use strict';
module.exports = (sequelize, DataTypes) => {
  const songList = sequelize.define('songList', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    adminId: DataTypes.NUMBER
  }, {});
  songList.associate = function(models) {
    // associations can be defined here
  };
  return songList;
};