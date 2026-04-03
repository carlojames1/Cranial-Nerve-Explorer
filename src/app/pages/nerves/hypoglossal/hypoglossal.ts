import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hypoglossal',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './hypoglossal.html',
  styleUrl: './hypoglossal.css'
})
export class Hypoglossal {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}