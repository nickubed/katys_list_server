'use strict';
module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    name: DataTypes.STRING,
    listId: DataTypes.NUMBER,
    userId: DataTypes.NUMBER,
    spotifyId: DataTypes.STRING
  }, {});
  song.associate = function(models) {
    // associations can be defined here
  };
  return song;
};