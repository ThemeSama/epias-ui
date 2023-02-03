import { useCallback, useRef, useState } from 'react';
import { saveContract } from '../services/contracts-service';

const ContractForm = ({contractList}) => {
  const contractForm = useRef();
  const [contract, setContract] = useState({});
  const [newContractList, setNewContractList] = useState([]);

  const openForm = useCallback(() => {
    contractForm.current.classList.remove('d-none');
  }, []);

  const formSubmit = useCallback(async (event) => {
    event.preventDefault();
    const newContract = await saveContract(contract);

    setNewContractList((prevList) => {
      const newList = [...prevList];
      newList.push(newContract.data);

      return newList;
    });

    // başka seviyedeki datatable yeni verileri getirsin diye ekledim
    contractList.current.updateTable();
  }, [contract, contractList]);

  const changeContract = useCallback((prop) => (event) => {
    setContract((prevContract) => {
      const newContract = {...prevContract};
      newContract[prop] = event.target.value;

      return newContract;
    });
  }, [setContract]);

  return <div className='epias-contract-form p-2'>

    {newContractList.length ?
    <table className='table table-sm mb-4'>
      <thead>
        <tr>
          <th colSpan={4}>Son Eklenenler</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Kontrat</th>
          <th>Teklif</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {newContractList.map((c) => 
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.contract}</td>
            <td>{c.offer}</td>
            <td>{c.data}</td>
          </tr>
        )}
      </tbody>
    </table>: null}

    <form className='mb-3 d-none' ref={contractForm} onSubmit={formSubmit}>
      <div className='row'>
        <div className='col'>
          <input 
            type='text' 
            className='form-control form-control-sm' 
            placeholder='Kontrat'
            onChange={changeContract('contract')}
          />
        </div>
        <div className='col'>
          <input 
            type='text' 
            className='form-control form-control-sm' 
            placeholder='Teklif'
            onChange={changeContract('offer')}
          />
        </div>
        <div className='col'>
          <input 
            type='text' 
            className='form-control form-control-sm' 
            placeholder='Data' 
            onChange={changeContract('data')}
          />
        </div>
        <div className='col'>
          <button type='submit' className='btn btn-sm btn-primary'>Kaydet</button>
        </div>
      </div>
    </form>

    <button 
      type='button' 
      className='btn btn-sm btn-success'
      onClick={openForm}
    >
      Yeni Ekle
    </button>
  </div>
}

export default ContractForm;