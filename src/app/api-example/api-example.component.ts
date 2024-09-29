import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiData } from '../api-data';
// import { UniversitiesListService } from '../../share/universities-list.service';


@Component({
  selector: 'app-api-example',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  //providers: []
  template: `
    <table style="padding: 20px;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Alpha Two Code</th>
          <th>Domains</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let university of universitiesList">
          <td style="padding: 7px;">{{ university.name }}</td>
          <td>{{ university.country }}</td>
          <td style="padding: 5px; text-align: center;">{{ university.alpha_two_code }}</td>
          <td style="padding: 5px;">
            <ul>
              <li *ngFor="let domain of university.domains">{{ domain }}</li>
            </ul>  
          </td>
          <td><a href="{{university.web_pages}}">{{university.web_pages}}</a></td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./api-example.component.css']
})

export class ApiExampleComponent implements OnInit {
  public universitiesList: ApiData[] = [];

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
