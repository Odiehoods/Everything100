import express from 'express';
import mongoose from 'mongoose';


mongoose
.connect('mongodb+srv://odiehoods:odiehoodsever@mern100.brzfe0z.mongodb.net/mernblog?retryWrites=true&w=majority&appName=mern100')
.then( () => { console.log('Mongodb is connected');
});


const app = express();

app.listen(3000, () => {
    console. log('Server is runing on port 3000');
});