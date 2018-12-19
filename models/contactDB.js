module.exports = function(sequelize, DataTypes) {
    var ContactDB = sequelize.define("ContactDB", {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.TEXT
    });
    return ContactDB;
  };