'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /*this.belongsTo(models.estados, { foreignKey: 'estado', as: 'estado'
    })/*, 
      this.belongsTo(models.documentos, { foreignKey: 'tipo_identificacion', as: 'identificacion'
    })*/
    }
  };
  Usuario.init({
    tipo_identificacion: DataTypes.INTEGER,
    numero_identificacion: DataTypes.STRING,
    nombre_usuario: DataTypes.STRING,
    apellidos_usuario: DataTypes.STRING,
    pais: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    barrio: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    pws: DataTypes.STRING,
    correo: DataTypes.STRING,
    fecha_nacimiento: DataTypes.STRING,
    genero: DataTypes.STRING,
    rol: DataTypes.STRING,
    estado: DataTypes.INTEGER,
    acpetacion_terminos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};