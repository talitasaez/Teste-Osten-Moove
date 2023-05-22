const { Company } = require('../database/models');

const getAllCompanies = async () => {
  const companies = await Company.findAll();
  return companies;
};

const createCompany = async ({ name, street, number, neighborhood, city, state }) => {
  const company = await Company.create({
    name,
    street,
    number,
    neighborhood,
    city,
    state
  });
  return company;
};

const getCompanyById = async (id) => {
  const company = await Company.findByPk(id);
  return company;
};

const updateCompany = async (id, { name, street, number, neighborhood, city, state }) => {
  const company = await Company.findByPk(id);

  if (!company) {
    return null;
  }

  await company.update({
    name: name || company.name,
    street: street || company.street,
    number: number || company.number,
    neighborhood: neighborhood || company.neighborhood,
    city: city || company.city,
    state: state || company.state
  });

  return company;
};

const deleteCompany = async (id) => {
  const company = await Company.findByPk(id);

  if (!company) {
    return null;
  }

  await company.destroy();

  return company;
};

module.exports = {
  getAllCompanies,
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany
};