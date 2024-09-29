import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div>
    <button [disabled]="clickedArr[0]" (click)="handleClick(0)">
      Click me
    </button>
    <button [disabled]="clickedArr[1]" (click)="handleClick(1)">
      Click me too
    </button> 
   </div>
   <div>
    <p *ngIf="clickedArr[0]">You clicked the first button!</p>
    <p *ngIf="clickedArr[1]">You clicked the second button!</p>
   </div> 
  `,
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  clickedArr: boolean[] = [false, false];
  handleClick(button: number) {
    this.clickedArr[button] = true;
    // @Input() universityCountries!: UniversityCountries;
  }
  /*
  <form > 
        <div class="search">
        <input class="search-bar" type="text" placeholder="Search">
        <button class="search-button" type="button">
          <img class="search-button-image" src="/assets/search.png">
        </button> 
        </div>
      </form>
  */    
}
