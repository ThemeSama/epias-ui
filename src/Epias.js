import Header from './views/Header';
import Split from 'react-split';
import './styles/epias.scss';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSize } from './redux/actions';
import Contracts from './views/Contracts';
import SplitInfo from './views/SplitInfo';
import LoremIpsum from './views/LoremIpsum';
import ContractForm from './views/ContractForm';

const Epias = () => {

  const sizesState = useSelector((state) => state.sizes);
  const dispatch = useDispatch();

  const setSplitSizes = useCallback((split) => (sizes) => {
    dispatch(setSize({split, sizes}));
  }, [dispatch]);

  return <>
    <Header />
    <Split 
      className='epies-split-container'
      direction='vertical'
      sizes={sizesState['h']}
      minSize={200}
      onDragEnd={setSplitSizes('h')}
    >
      <Split 
        className='split'
        sizes={sizesState['vt']}
        minSize={400}
        onDragEnd={setSplitSizes('vt')}
      >
        <Contracts />
        <SplitInfo />
      </Split>
      <Split 
        className='split'
        sizes={sizesState['vb']}
        minSize={400}
        onDragEnd={setSplitSizes('vb')}
      >
        <ContractForm />
        <LoremIpsum />
      </Split>
    </Split>
  </>
}

export default Epias;