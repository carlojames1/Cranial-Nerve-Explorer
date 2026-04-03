import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-oculomotor',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './oculomotor.html',
  styleUrl: './oculomotor.css'
})
export class Oculomotor {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}