import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRecruitmentFormComponent } from './company-recruitment-form.component';

describe('CompanyRecruitmentFormComponent', () => {
  let component: CompanyRecruitmentFormComponent;
  let fixture: ComponentFixture<CompanyRecruitmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRecruitmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRecruitmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
