import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import pokemonRoutes from './routes/pokemon.routes';
import authRoutes from './routes/auth.routes'; 
import { verifyToken } from './middleware/auth.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/pokemons', pokemonRoutes);
app.use('/api/auth', authRoutes);

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
        console.log('✅ Conectado a MongoDB');
        app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
    });
