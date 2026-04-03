import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-glossopharyngeal',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './glossopharyngeal.html',
  styleUrl: './glossopharyngeal.css'
})
export class Glossopharyngeal {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}