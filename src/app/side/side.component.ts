import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarModule, ButtonModule],
  template: `
    <button (click)="toggleSidebar()" pButton icon="pi pi-bars" label="Menu" class="p-button-text"></button>
    <p-sidebar [(visible)]="visibleSidebar" [baseZIndex]="10000">
      <h3>Menu</h3>
      <ul>
        <li><a routerLink="main" (click)="navigation('main')">Main page</a></li>
        <li><a routerLink="info" (click)="navigation('info')">University Info</a></li>
        <li><a routerLink="html" (click)="navigation('html')">HTML Table</a></li>
        <li><a routerLink="prime" (click)="navigation('prime')">PrimeNG Table</a></li>
        <li><a routerLink="api-html" (click)="navigation('api-html')">API HTML Table</a></li>
        <li><a routerLink="api-prime" (click)="navigation('api-prime')">API PrimeNG Table</a></li>
      </ul>
    </p-sidebar>
  `,
  styleUrls: ['./side.component.css'],
})
export class SideComponent {
  visibleSidebar: boolean = false;

  toggleSidebar() {
    this.visibleSidebar = !this.visibleSidebar;
  }

  navigation(route: string) {
    this.toggleSidebar();
  }
}
