const cors    = require('cors');
const express = require('express');
const dotenv  = require('dotenv');

// profiles
const profiles     = process.env.NODE_ENV;
const profilesPath = profiles === 'local' ? '..' : '.';
dotenv.config({ "path": `${profilesPath}/profiles/node/.env.${profiles}` });

// settings
const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/test',   require('./routes/test'));
app.use('/jobsns', require('./routes/jobsns'));

// run
const PORT = 9000;
app.listen(PORT, function() {
    console.log(`node listening on ${PORT}`);
});