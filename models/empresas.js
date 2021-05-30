'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // define association here

     /* this.belongsTo(models.Estados, { foreignKey: 'estado', as: 'estado'
    })*/

    }
  };
  Empresas.init({
    nombre_empresa: DataTypes.STRING,
    nit: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    pws: DataTypes.STRING,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Empresas',
  });
  return Empresas;
};