'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_identificacion: {
        type: Sequelize.STRING,
        /*allowNull:false,
        references: {
          model: 'documentos',
          key: 'id'
        }*/

      },
      numero_identificacion: {
        type: Sequelize.STRING
      },
      nombre_usuario: {
        type: Sequelize.STRING
      },
      apellidos_usuario: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      barrio: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      pws: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      fecha_nacimiento: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      rol: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // User belongsTo Company 1:1
        model: 'estados',
        key: 'id'
      }
      },
      acpetacion_terminos: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};