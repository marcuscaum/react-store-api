# react-store-api
API to serve react-store

--
### Local development
- Start mongo connection: `sudo mongod  --dbpath react-store-api`
- Run `node db_seed.js` to populate local server
- Run `node server.js`


### GET /products/all
Return all products from mongo collection.

### POST /products/new/:params
Create a new product:
```json 
  { 
    "name": "String", 
    "description": "String",
    "images": "[String]", 
    "options": {
      "colors": "[String]", 
      "size": "[String]" 
    }
  }
```
