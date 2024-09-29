import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  
  private isAuthenticated = signal(false);

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.isAuthenticated.set(true);
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated.set(false);
    localStorage.removeItem('isLoggedIn');
  }

  checkAuth(): boolean {
    this.isAuthenticated.set(localStorage.getItem('isLoggedIn') === 'true');
    return this.isAuthenticated();
  }

  getAuthState() {
    return this.isAuthenticated;
  }

  canActivate(){
    if (this.checkAuth()) {
      return true;
    } 
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}


