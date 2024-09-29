import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="login()">
        <div class="form-group">
          <input type="text" placeholder="Username" [(ngModel)]="username"name="username" class="input-field"/>
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" [(ngModel)]="password" name="password" class="input-field"/>
        </div>
        <button class="login-button">Login</button>
      </form>
    </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authGuard: AuthGuard) {}

  login() {
    if (!this.authGuard.login(this.username, this.password)) {
      alert('The username or the password you entered is incorrect');
    }
  }

}
