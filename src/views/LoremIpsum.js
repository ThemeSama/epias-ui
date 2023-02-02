import { useState, useEffect, useCallback } from 'react';
import { getLorem } from '../services/dino-service';

const LoremIpsum = () => {
  const [content, setContent] = useState({__html:''});

  const getContent = useCallback(async () => {
    const htmlContent = await getLorem();
    setContent({__html: htmlContent });
  }, []);

  useEffect(() => {
    getContent();
  }, [getContent]);

  return <div className='epias-lorem-ipsum p-2' dangerouslySetInnerHTML={content} />
}

export default LoremIpsum;