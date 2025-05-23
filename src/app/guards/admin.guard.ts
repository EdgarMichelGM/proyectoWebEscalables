import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AdminGuard: CanActivateFn = () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const token = auth.getToken();
    if (!token) {
        alert('Debes iniciar sesión como admin para acceder a esta funcion.');
        return router.parseUrl('/login');
    }

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const username = payload?.username;

        if (!username.startsWith('admin')) {
        alert('Acceso restringido. Solo el administrador puede entrar a esta sección.');
        return router.parseUrl('/home');
        }

        return true;
    } catch (error) {
        alert('Token inválido. Inicia sesión nuevamente.');
        return router.parseUrl('/login');
    }
};
