import { useCallback } from 'react';

/**
 * Tablonun filtreleme sürecini yönetir
 * @component
 * 
 * @param {Set} options - Filtreleme yapılacak değerler
 * @param {Function} filterList - Listeyi güncelleyen method
 * 
 * @since 1.0
 */
const Filter = ({options, filterList}) => {
  const filter = useCallback((e) => {
    filterList(e.target.value);
  }, [filterList]);

  return <div className='epias-datatable-filter'>
    <div className='input-group input-group-sm mb-2'>
      <select onChange={filter} className='form-select form-input-sm'>
        <option value=''>Kontrat Seçiniz</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  </div>;
}

export default Filter;