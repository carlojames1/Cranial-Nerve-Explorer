import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-optic',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './optic.html',
  styleUrl: './optic.css'
})

export class Optic {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}