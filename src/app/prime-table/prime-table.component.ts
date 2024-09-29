import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UniversityWebsites } from '../university-websites';


@Component({
  selector: 'app-prime-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `
   <p-table [value]="universityCountriesList" [tableStyle]="tableStyles">
      <ng-template pTemplate="header">
        <tr>
          <th [ngStyle]="thStyle">University Name</th>
          <th [ngStyle]="thStyle">Website</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-university>
        <tr>
          <td style="color: rgb(24, 151, 77);">{{ university.name }}</td>
          <td>
            <a [href]="university.website[0]" [ngStyle]="linkStyle">{{ university.website[0]}}</a>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styleUrl: './prime-table.component.css'
})
export class PrimeTableComponent {
    thStyle = {
        'background-color': 'rgb(241, 255, 241)',
        'border-radius': '15px',
        'text-align': 'center',
        'padding': '5px',
        'color': 'rgb(23, 88, 50)'
    };

    linkStyle = {
        color: 'rgb(23, 88, 50)',
    };

  universityCountriesList: UniversityWebsites[] = [
    {
      "name": "Middlesbrough College",
      "website": [
          "https://www.mbro.ac.uk/"
      ]
  },
  {
      "name": "Middlesex County College",
      "website": [
          "http://www.middlesexcc.edu"
      ]
  },
  {
      "name": "Middlesex Community College",
      "website": [
          "http://www.middlesex.mass.edu"
      ]
  },
  {
      "name": "Middlesex University - London",
      "website": [
          "https://www.mdx.ac.uk/"
      ]
  },
  {
      "name": "Middle Georgia State College",
      "website": [
          "http://www.mga.edu/"
      ]
  },
  {
      "name": "Middle Tennessee State University",
      "website": [
          "http://www.mtsu.edu/"
      ]
  },
  {
      "name": "Middle East Technical University",
      "website": [
          "http://www.metu.edu.tr/"
      ]
  },
  {
      "name": "Middle East University",
      "website": [
          "http://www.meu.edu.jo/"
      ]
  },
  {
      "name": "Middlebury College",
      "website": [
          "http://www.middlebury.edu/"
      ]
  },
  {
      "name": "American University of Middle East",
      "website": [
          "http://www.aum.edu.kw/"
      ]
  }
  ];

  tableStyles = {
    'width': '100%',
    'border-collapse': 'separate',
    'border-spacing': '8px 8px',
    'margin-top': '20px'
  };
  
}
