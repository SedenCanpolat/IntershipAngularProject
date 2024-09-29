import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUniversityDetailsComponent } from './table-university-details.component';

describe('TableUniversityDetailsComponent', () => {
  let component: TableUniversityDetailsComponent;
  let fixture: ComponentFixture<TableUniversityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableUniversityDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableUniversityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
