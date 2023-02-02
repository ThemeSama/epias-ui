import { createServer, Model } from 'miragejs';

const contractList = [
  { id: 1, contract: "2019", offer: 78125, data: 'Alış' },
  { id: 2, contract: "2019", offer: 78125, data: 'Satış' },
  { id: 3, contract: "2019", offer: 1485, data: 'Satış' },
  { id: 4, contract: "2018", offer: 12444, data: 'Satış' },
  { id: 5, contract: "2018", offer: 255, data: 'Alış' }
];

export default function FakeServer() {
  createServer({
    models: {
      contracts: Model
    },

    routes() {
      this.namespace = '/api';
      
      this.get("/contracts", (schema, request) => ({
        contracts: request.queryParams.contract ? contractList.filter((c) => c.contract === request.queryParams.contract) : contractList
      }));
      
      let newId = contractList.length;
      this.post("/contracts", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = ++newId;

        contractList.push(attrs);
        
        return attrs;
      });

      this.passthrough(`${process.env.REACT_APP_LOREM_API}**`);
    }
  });
}