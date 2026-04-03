import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trochlear',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './trochlear.html',
  styleUrl: './trochlear.css'
})
export class Trochlear {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}