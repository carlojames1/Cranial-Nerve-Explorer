import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-overview',
  standalone: true, // ✅ VERY IMPORTANT
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './overview.html',
  styleUrls: ['./overview.css'] // ✅ fix (plural)
})
export class OverviewComponent {}
