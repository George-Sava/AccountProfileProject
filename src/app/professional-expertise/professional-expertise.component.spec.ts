import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExpertiseComponent } from './professional-expertise.component';

describe('ProfessionalExpertiseComponent', () => {
  let component: ProfessionalExpertiseComponent;
  let fixture: ComponentFixture<ProfessionalExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
