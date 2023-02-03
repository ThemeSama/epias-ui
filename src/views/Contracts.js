import { useEffect, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import DataTable from '../components/DataTable';
import Actions from '../components/datatable/Actions';
import Filter from '../components/datatable/Filter';
import { getContracts } from '../services/contracts-service';

const Contracts = forwardRef(({children}, ref) => {
  const [list, setList] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [tableColumns, setTableColumns] = useState([
    {
      column: 'id',
      title: 'ID',
      visible: true
    },
    {
      column: 'contract',
      title: 'Kontrat',
      visible: true
    },
    {
      column: 'offer',
      title: 'Teklif',
      visible: true
    },
    {
      column: 'data',
      title: 'Data',
      visible: true
    }
  ]);

  // üst bileşenden erişim için bazı detayları paylaş
  useImperativeHandle(ref, () => ({
    updateTable: () => {
      getList();
    }
  }));

  const getList = useCallback(async (contract) => {
    const list = await getContracts(contract);
    setList(list.contracts);

    // filtre yoksa filtre icin liste olustur
    if( !contract ) {
      setFilterOptions([...new Set(list.contracts.map((l) => l.contract))]);
    }
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  const toggleColumn = useCallback((column) => {
    setTableColumns((prevColumns) => {
      const columnsStatus = [...prevColumns];

      const columnIndex = columnsStatus.findIndex(c => c.column === column);
      columnsStatus[columnIndex]['visible'] = !columnsStatus[columnIndex]['visible'];

      return columnsStatus;
    })
  }, []);

  return <div className='epias-contract-list p-2'>
    <div className='epias-datatable-actions-container'>
      <Filter options={filterOptions} filterList={getList} />
      <Actions columns={tableColumns} toggleColumn={toggleColumn}/>
    </div>
    <DataTable list={list} columns={tableColumns} />
  </div>;
})

export default Contracts;