import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';

@Component({
  selector: 'app-accessory',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './accessory.html',
  styleUrl: './accessory.css'
})
export class Accessory {
  
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}