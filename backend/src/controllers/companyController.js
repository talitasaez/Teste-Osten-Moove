
const { Company } = require('../database/models');
// retorna todas as empresas 
const getAllCompanies = async (_req, res) => {
  const companies = await Company.findAll();
  return res.status(200).json(companies);
};

// cria cadastro das empresas 
const createCompany = async (req, res) => {
  const { name, street, number, neighborhood, city, state } = req.body;

  if (!name || !street || !number || !neighborhood || !city || !state) {
    return res.status(400).json({ error: 'Existem campos não preenchidos' }); // 
  }

  const company = await Company.create({
    name,
    street,
    number,
    neighborhood,
    city,
    state
  });

  return res.status(201).json(company);
};

// detalhes da empresa
const getCompanyById = async (req, res) => {
  const { id } = req.params;

  const company = await Company.findByPk(id);

  if (!company) {
    return res.status(404).json({ error: 'Empresa não encontrada' });
  }

  return res.status(200).json(company);
};

//alteracao no cadastro da empresa 
const updateCompany = async (req, res) => {
  const { id } = req.params;
  const { name, street, number, neighborhood, city, state } = req.body;

  if (!name && !street && !number && !neighborhood && !city && !state) {
    return res.status(400).json({ error: 'Preencha todos os campos' });

  }

  const company = await Company.findByPk(id);

  if (!company) {
    return res.status(404).json({ error: 'Empresa não encontrada ' });
  }

  await company.update({
    name: name || company.name,
    street: street || company.street,
    number: number || company.number,
    neighborhood: neighborhood || company.neighborhood,
    city: city || company.city,
    state: state || company.state
  });

  return res.status(200).json(company);
};

//deletar empresa 
const deleteCompany = async (req, res) => {
  const { id } = req.params;

  const company = await Company.findByPk(id);

  if (!company) {
    return res.status(404).json({ error: 'Empresa não encontrada' });
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
