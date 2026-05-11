const express = require('express');
const app = express();
const authRoutes = require('./Routes/authRoutes');
app.use(express.json());

app.use('/api/auth', authRoutes);


app.listen(3000, ()=>{


console.log('Server is running');

});