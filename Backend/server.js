const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({origin: 'http://localhost:5173'})); 

const authRoutes = require('./Routes/authRoutes');
const menuRoutes = require('./Routes/menuRoutes');
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);


app.listen(3000, ()=>{


console.log('Server is running');

});