import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiData } from '../api-data';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-api-primeng',
  standalone: true,
  imports: [HttpClientModule, CommonModule, TableModule],
  template: `
    <p-table [value]="universitiesList" [style]="{'padding': '20px'}">
      <ng-template pTemplate="header">
        <tr>
          <th [ngStyle]="thStyle">Name</th>
          <th [ngStyle]="thStyle">Country</th>
          <th [ngStyle]="thStyle">Alpha Two Code</th>
          <th [ngStyle]="thStyle">Domains</th>
          <th [ngStyle]="thStyle">Website</th>
      </ng-template>
      <ng-template pTemplate="body" let-university>
        <tr>
          <td>{{ university.name }}</td>
          <td>{{ university.country }}</td>
          <td style="text-align: center;">{{ university.alpha_two_code }}</td>
          <td>
            <ul>
              <li *ngFor="let domain of university.domains">{{ domain }}</li>
            </ul>  
          </td>
          <td><a href="{{university.web_pages}}" [ngStyle]="linkStyle">{{university.web_pages}}</a></td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styleUrl: './api-primeng.component.css'
})

export class ApiPrimengComponent {

  thStyle = {
    'background-color': 'rgb(23, 88, 50)',
    'text-align': 'center',
    'padding': '5px',
    'color': 'white'
};

linkStyle = {
        color: 'rgb(23, 88, 50)',
    };


  public universitiesList: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {    
     this.http.get<ApiData[]>('http://universities.hipolabs.com/search?name=middle').subscribe((data) => { 
      this.universitiesList = data;
    });
  }

}
