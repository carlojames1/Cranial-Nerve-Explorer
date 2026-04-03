import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-olfactory',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './olfactory.html',
  styleUrl: './olfactory.css'
})
export class Olfactory {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}