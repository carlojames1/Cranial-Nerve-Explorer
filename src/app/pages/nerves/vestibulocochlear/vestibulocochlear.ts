import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar';
import { FooterComponent } from '../../../shared/footer/footer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vestibulocochlear',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './vestibulocochlear.html',
  styleUrl: './vestibulocochlear.css'
})
export class Vestibulocochlear {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}