import { Routes } from '@angular/router';
import { InfoUniversityComponent } from '../info-university/info-university.component';
import { TableUniversityDetailsComponent } from '../table-university-details/table-university-details.component';
import { PrimeTableComponent } from '../prime-table/prime-table.component';
import { ApiExampleComponent } from '../api-example/api-example.component';
import { ApiPrimengComponent } from '../api-primeng/api-primeng.component';

export const universityRoutes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'main',  redirectTo: '' },
  { path: 'info', component: InfoUniversityComponent },
  { path: 'html', component: TableUniversityDetailsComponent },
  { path: 'prime', component: PrimeTableComponent },
  { path: 'api-html', component: ApiExampleComponent },
  { path: 'api-prime', component: ApiPrimengComponent },
];
