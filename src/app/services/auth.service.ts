import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';

interface AuthResponse { token: string; }
interface Credentials { username: string; password: string; }

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private api = `${environment.apiUrl}/auth`;

    constructor(private http: HttpClient) {}

    register(creds: Credentials): Observable<any> {
        return this.http.post(`${this.api}/register`, creds);
    }

    login(creds: Credentials): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.api}/login`, creds)
        .pipe(
            tap(res => localStorage.setItem('token', res.token))
        );
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

}
