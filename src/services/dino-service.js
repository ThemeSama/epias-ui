import axios from 'axios';

const dinoClient = axios.create({
  baseURL: process.env.REACT_APP_LOREM_API
});

const getLorem = async () => {
  const loremList = await dinoClient.get('/api/', {params: {format: 'html', paragraphs: 3}});
  return loremList.data;
}

export { getLorem };