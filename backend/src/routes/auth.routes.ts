import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'Usuario creado' });
    } catch (err) {
        res.status(400).json({ error: 'Error al registrar usuario' });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }) as IUser;

    if (!user || !(await user.comparePassword(password))) {
        res.status(401).json({ error: 'Credenciales inválidas' });
        return;  
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
        expiresIn: '1h'
    });

    res.json({ token });
});

export default router;
