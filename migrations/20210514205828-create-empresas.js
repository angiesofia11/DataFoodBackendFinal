'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_empresa: {
        type: Sequelize.STRING
      },
      nit: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      pws: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.INTEGER,
        /*allowNull: false,
        references: { // User belongsTo Company 1:1
        model: 'Estados',
        key: 'id'
      }*/

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
    await queryInterface.dropTable('Empresas');
  }
};