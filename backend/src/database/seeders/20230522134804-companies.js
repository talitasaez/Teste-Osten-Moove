module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const companiesData =
    await queryInterface.bulkInsert('Companies',
      [{
        name: 'Empresa 1',
        street: 'Rua A',
        number: '123',
        neighborhood: 'Bairro 1',
        city: 'Cidade 1',
        state: 'Estado 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Empresa 2',
        street: 'Rua B',
        number: '456',
        neighborhood: 'Bairro 2',
        city: 'Cidade 2',
        state: 'Estado 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // await Company.bulkCreate(companiesData);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
  },
};