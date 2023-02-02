import { useSelector } from 'react-redux';
import { useCallback } from 'react';

const SplitInfo = () => {
  const sizesState = useSelector((state) => state.sizes);

  const humanReadable = useCallback((sizes) => {
    return sizes.map((s) => `%${s.toFixed(1)}`).join(', ');
  }, []);

  return <div className='epias-split-info p-2 d-none d-lg-flex'>
    <div className='card w-auto ms-auto'>
      <div className='card-header'>
        Ayarlar
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <h6 className='card-title'>Yatay Pencere Değerleri</h6>
          <p className='card-text'>{humanReadable(sizesState['h'])}</p>
        </li>
        <li className='list-group-item'>
          <h6 className='card-title'>Üst Dikey Pencere Değerleri</h6>
          <p className='card-text'>{humanReadable(sizesState['vt'])}</p>
        </li>
        <li className='list-group-item'>
          <h6 className='card-title'>Alt Dikey Pencere Değerleri</h6>
          <p className='card-text'>{humanReadable(sizesState['vb'])}</p>
        </li>
      </ul>
    </div>
    <div className='clearfix' />
  </div>;
}

export default SplitInfo;