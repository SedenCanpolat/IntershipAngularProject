import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideComponent } from '../side/side.component';

@Component({
  selector: 'app-university',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideComponent,
  ],
  template: `
    <div class="university-container">
      <section class="headers">
        <h1>{{ "Tables of " + title }}</h1>
        <h2>{{ getSubTitle() }}</h2>
      </section>
      <app-side></app-side>
      <section class="results">
        <router-outlet></router-outlet>
      </section>
    </div>
  `,
  styleUrls: ['./university.component.css'],
})
export class UniversityComponent {
  title = 'Universities';
  subTitle = 'Click on the menu for the University Information Tables';

  getSubTitle() {
    return this.subTitle;
  }
}
