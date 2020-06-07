'use strict';
module.exports = (sequelize, DataTypes) => {
  const songList = sequelize.define('songList', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    adminId: DataTypes.NUMBER
  }, {});
  songList.associate = function(models) {
    models.songList.hasMany(models.song)
    models.songList.belongsToMany(models.user, {through: 'user_list'})
  };
  return songList;
};