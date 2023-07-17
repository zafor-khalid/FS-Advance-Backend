const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swagger.yaml');

const app = express();
app.use(express.json());
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get('/health', (_, res) => {
    res.status(200).json({ message: 'OK' });
});

app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});