const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());

//parse request of content-type - application/json
app.use(express.json());

//parse request of content-type - application/x-www-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database syncing...');
    });

app.get('/', (req, res) => {
    res.send('Default Route')
});

require('./app/routes/student.route')(app);
require('./app/routes/university.route')(app);
require('./app/routes/information.route')(app);
//const router = require('./app/routes/student.route');
//app.use('/students', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})