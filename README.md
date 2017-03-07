# MERN Stack
Mongo
Express
React
Node

##Setup 

##### 1. Clone this repo
```
git clone git@github.com:t3tools/webpack-es6-and-scss.git «your-projet»
```

##### 2. Install the packages
```
npm install
```

##### 3. Run the taskrunner & run the local server
- Task Runner
```
npm run go
```


##### 4. Workflow
Do scss and javascript work in the `src-server/` directory. It will compile to the `dist/` with the taskrunner.

`index.html` pages are served out of the `dist/`

#### 5. Backend Routes
- `/api`
  - GET `/api/items`
  - GET `/api/items/:id`
  - POST `/api/items/`
  - PUT `/api/items/:id`
  - DELETE `/api/items/:id`
- `/auth` 
  - POST `/auth/register`
  - POST `/login`
  - GET `/current`
  - GET `/logout`
