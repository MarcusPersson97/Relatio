const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); 

const authRoutes = require('./Routes/authRoutes');
app.use(express.json());

app.use('/api/auth', authRoutes);


app.listen(3000, ()=>{


console.log('Server is running');

});