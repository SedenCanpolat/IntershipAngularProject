import { Component } from '@angular/core';
import { UniversityComponent } from './university/university.component';
import { ExampleComponent } from './example/example.component';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  template: `  
  <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.png" alt="Website Logo" aria-hidden="true" />
    <h1>Welcome to, {{ title }}</h1>
  </header>

  <ng-container *ngIf="isAuthenticated() else loginTemplate">
    <router-outlet></router-outlet>
    <button (click)="logout()">Logout</button>
  </ng-container>

  <ng-template #loginTemplate>
    <app-login></app-login>
  </ng-template>
  `,  // './app.component.html', <p-button label="PrimeNG"></p-button> <app-example></app-example>
  styleUrls: ['./app.component.css'],
  imports: [UniversityComponent, ExampleComponent, ButtonModule, LoginComponent, CommonModule, RouterModule],
})
export class AppComponent {
  title = 'My Internship Angular Project';
  
  isAuthenticated = this.authGuard.getAuthState();

  constructor(private authGuard: AuthGuard, private router: Router) {
    this.isAuthenticated.set(this.authGuard.checkAuth());
  }

  logout() {
    this.authGuard.logout();
    this.isAuthenticated.set(false);
    this.router.navigate(['/university']);
  }
}

