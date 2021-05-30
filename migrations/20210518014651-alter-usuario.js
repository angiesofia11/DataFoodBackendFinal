'use strict';

//const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Usuarios', 'tipo_identificacion',
    {type: Sequelize.INTEGER});


    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     * 
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.changeColumn('Usuarios');
  }
};
