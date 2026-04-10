import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {

  const savedUser = JSON.parse(localStorage.getItem('user') || '{}');

  // ✅ CHECK REGISTERED USER
  if (
    this.username === savedUser.username &&
    this.password === savedUser.password
  ) {
    this.errorMessage = '';
    this.router.navigate(['/home']);
  }

  // ✅ OPTIONAL: still allow admin
  else if (this.username === 'admin' && this.password === 'admin') {
    this.errorMessage = '';
    this.router.navigate(['/home']);
  }

  else {
    this.errorMessage = 'Invalid username or password';
  }
}
}