import axios from 'axios';

const contractsClient = axios.create({
  baseURL: process.env.REACT_APP_API
});

const getContracts = async (contract) => {
  const contractList = await contractsClient.get('contracts', {params: {contract: contract}});
  return contractList.data;
}

const saveContract = async (contract) => {
  console.log(contract);
  const newContract = await contractsClient.post('contracts', contract);

  return newContract;
}

export { getContracts, saveContract };