import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vagus',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './vagus.html',
  styleUrl: './vagus.css'
})
export class Vagus {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}