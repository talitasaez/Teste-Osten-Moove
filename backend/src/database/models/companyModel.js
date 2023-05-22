const CompanyModel = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    (async () => {
      await Company.sync();
    })();
  
    return Company;
  };
  
  // const Company = CompanyModel(sequelize, DataTypes);
  
  module.exports = CompanyModel;