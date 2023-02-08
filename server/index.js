import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

// aqui entra o mongoDB, feito por Elvis Narciso 
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from DaLL-e!');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('O servidor iniciou na porta https://elvis-teste-site.onrender.com/'))
    } catch (error) {
        console.log(error);
    } 
}

startServer();