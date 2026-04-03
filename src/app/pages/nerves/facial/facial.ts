import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';

@Component({
  selector: 'app-facial',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './facial.html',
  styleUrl: './facial.css'
})
export class Facial {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }}