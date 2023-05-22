
const { Company } = require('../database/models');

const getAllCompanies = async (_req, res) => {
  const companies = await Company.findAll();
  return res.status(200).json(companies);
};

const createCompany = async (req, res) => {
  const { companyName, streetName, addressNumber, neighborhood, city, state } = req.body;

  if (!companyName || !streetName || !addressNumber || !neighborhood || !city || !state) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const company = await Company.create({
    companyName,
    streetName,
    addressNumber,
    neighborhood,
    city,
    state
  });

  return res.status(201).json(company);
};

const getCompanyById = async (req, res) => {
  const { id } = req.params;

  const company = await Company.findByPk(id);

  if (!company) {
    return res.status(404).json({ error: 'Company not found' });
  }

  return res.status(200).json(company);
};

const updateCompany = async (req, res) => {
  const { id } = req.params;
  const { companyName, streetName, addressNumber, neighborhood, city, state } = req.body;

  if (!companyName && !streetName && !addressNumber && !neighborhood && !city && !state) {
    return res.status(400).json({ error: 'No fields to update' });
  }

  const company = await Company.findByPk(id);

  if (!company) {
    return res.status(404).json({ error: 'Company not found' });
  }

  await company.update({
    companyName: companyName || company.companyName,
    streetName: streetName || company.streetName,
    addressNumber: addressNumber || company.addressNumber,
    neighborhood: neighborhood || company.neighborhood,
    city: city || company.city,
    state: state || company.state
  });

  return res.status(200).json(company);
};

const deleteCompany = async (req, res) => {
  const { id } = req.params;

  const company = await Company.findByPk(id);

  if (!company) {
    return res.status(404).json({ error: 'Company not found' });
  }

  await company.destroy();

  return res.status(204).send();
};

module.exports = {
  getAllCompanies,
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany
};
