import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPrimengComponent } from './api-primeng.component';

describe('ApiPrimengComponent', () => {
  let component: ApiPrimengComponent;
  let fixture: ComponentFixture<ApiPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiPrimengComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
