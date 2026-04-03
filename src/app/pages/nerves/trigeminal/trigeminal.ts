import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trigeminal',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './trigeminal.html',
  styleUrl: './trigeminal.css'
})
export class Trigeminal {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}