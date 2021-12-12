const app = require('./app');
const dotenv = require('dotenv');
const { path } = require('./app');

dotenv.config({ path: './config.env' });

console.log('---------------------environment', app.get('env'));
console.log('---------------------process env', process.env);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to ${PORT}...`);
});