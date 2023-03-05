'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            email: 'admin@gmail.com',
            password: '123456',
            firstName: 'John',
            lastName: 'Doe',
            address: 'USA',
            phonenumber: '0338597737',
            gender: 1,
            image: '',
            roleId: 'ROLE',
            keyRole: 'R1',
            positionId: 'Master',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};