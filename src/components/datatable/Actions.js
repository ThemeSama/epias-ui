import { useCallback, useRef } from 'react';
import Icon from '../Icon';

const Actions = ({columns, toggleColumn}) => {
  const dropdownMenu = useRef();

  const toggleDropdownMenu = useCallback(() => {
    dropdownMenu.current.classList.toggle('d-block');
  }, []);

  return <div className='epias-datatable-actions'>
    <button type='button' className='epias-link-btn'>
      <Icon name='upload' />
    </button>
    <div className='epias-dropdown'>
      <button type='button' className='epias-link-btn' onClick={toggleDropdownMenu}>
        <Icon name='gear-wide' />
      </button>
      <ul className='dropdown-menu' ref={dropdownMenu}>
        {columns.map((column) => 
        <li key={column.column}>
          <label className='px-2 d-block'>
            <input 
              type='checkbox' 
              className='me-1'
              checked={column.visible} 
              onChange={() => toggleColumn(column.column)}
            />
            {column.title}
          </label>
        </li>
        )}
      </ul>
    </div>
    <button type='button' className='epias-link-btn'>
      <Icon name='plus-circle' />
    </button>
  </div>;
}

export default Actions;