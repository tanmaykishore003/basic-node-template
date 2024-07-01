
const express = require('express');
const {ServerConfig} = require('./config');
const apiRoutes = require('./routes');


const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log('Server is listening on PORT', ServerConfig.PORT);
})