import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-abducens',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './abducens.html',
  styleUrl: './abducens.css'
})
export class Abducens {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
  
}