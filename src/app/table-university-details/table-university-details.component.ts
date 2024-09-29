import { Component, Input } from '@angular/core';
import { UniversityCountries } from '../university-countries';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-university-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <tr>
          <th>University Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let university of universityCountriesList">
          <td>{{ university.name }}</td>
          <td>{{ university.country }}</td>
        </tr>
      </tbody>  
    </table>
  `,
  styleUrls: ['./table-university-details.component.css']
})
export class TableUniversityDetailsComponent {
  universityCountriesList: UniversityCountries[] = [
    {
      "name": "Middlesbrough College",
      "country": "United Kingdom"
    },
    {
      "name": "Middlesex County College",
      "country": "United States"
    },
    {
      "name": "Middlesex Community College",
      "country": "United States"
    },
    {
      "name": "Middlesex University - London",
      "country": "United Kingdom"
    },
    {
      "name": "Middle Georgia State College",
      "country": "United States"
    },
    {
      "name": "Middle Tennessee State University",
      "country": "United States"
    },
    {
      "name": "Middle East Technical University",
      "country": "Turkey"
    },
    {
      "name": "Middle East University",
      "country": "Jordan"
    },
    {
      "name": "Middlebury College",
      "country": "United States"
    },
    {
      "name": "American University of Middle East",
      "country": "Kuwait"
    }
  ];
}
