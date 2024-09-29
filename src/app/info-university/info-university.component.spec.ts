import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUniversityComponent } from './info-university.component';

describe('InfoUniversityComponent', () => {
  let component: InfoUniversityComponent;
  let fixture: ComponentFixture<InfoUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoUniversityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
