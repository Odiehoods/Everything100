import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


mongoose
.connect('mongodb+srv://odiehoods:odiehoodsever@mern100.brzfe0z.mongodb.net/mernblog?retryWrites=true&w=majority&appName=mern100')
.then( () => { console.log('Mongodb is connected');
});


const app = express();

app.use(express.json())

app.listen(3000, () => {
    console. log('Server is runing on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


app.use((err, req, res, next) => {
    const  statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});