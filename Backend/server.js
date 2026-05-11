const express = require('express');
const app = express();
const authRoutes = require('./Routes/authRoutes');


app.use('/api/auth', authRoutes);


app.listen(3000, ()=>{
<<<<<<< HEAD


=======
>>>>>>> 547f352576649272a754f15a6da0ee78393de953
console.log('Server is running');

});