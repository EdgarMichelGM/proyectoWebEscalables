import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export interface JwtPayload {
    id: string;
    iat: number;
    exp: number;
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        res.status(401).json({ error: 'Token no proporcionado' });
        return;
    }

    // Espera header "Bearer <token>"
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        res.status(401).json({ error: 'Formato de token inválido' });
        return;
    }

    const token = parts[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        // Opcional: guardar el userId en req
        (req as any).userId = decoded.id;
        next();
    } catch (err) {
        res.status(403).json({ error: 'Token inválido o expirado' });
    }
}
