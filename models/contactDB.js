module.exports = function(sequelize, DataTypes) {
    var ContactDB = sequelize.define("ContactDB", {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.TEXT
    });
    return ContactDB;
  };