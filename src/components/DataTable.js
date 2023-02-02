import { useEffect, useState } from 'react';
import Head from './datatable/Head';
import List from './datatable/List';

const DataTable = ({columns, list}) => {

  const [tableColumns, setTableColumns] = useState([]);

  useEffect(() => {
    // filter enabled columns
    setTableColumns(columns.filter((col) => col.visible));
  }, [columns]);

  return <div className='table-responsive'>
    <table className='table table-sm'>
      <Head columns={tableColumns} />
      <List list={list} columns={tableColumns} />
    </table>
  </div>;
}

export default DataTable;