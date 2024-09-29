import { Routes } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { universityRoutes } from './university/university-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: '/university', pathMatch: 'full' },
  { path: 'university', component: UniversityComponent, children: universityRoutes },
  
];

export class AppRoutingModule {}
