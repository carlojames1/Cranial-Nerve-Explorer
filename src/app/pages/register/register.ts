import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

/* ✅ IMPORT NAVBAR + FOOTER */
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-register',
  standalone: true,

  /* ✅ ADD THEM HERE */
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],

  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {

  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  register() {
  if (!this.username || !this.email || !this.password || !this.confirmPassword) {
    this.errorMessage = 'All fields are required';
    return;
  }

  if (this.password !== this.confirmPassword) {
    this.errorMessage = 'Passwords do not match';
    return;
  }

  // ✅ SAVE USER
  const user = {
    username: this.username,
    email: this.email,
    password: this.password
  };

  localStorage.setItem('user', JSON.stringify(user));

  this.errorMessage = '';
  this.successMessage = 'Registered successfully!';

  setTimeout(() => {
    this.router.navigate(['/login']);
  }, 1000);
}
}