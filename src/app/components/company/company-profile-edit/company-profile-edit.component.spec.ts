import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileEditComponent } from './company-profile-edit.component';

describe('CompanyProfileEditComponent', () => {
  let component: CompanyProfileEditComponent;
  let fixture: ComponentFixture<CompanyProfileEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyProfileEditComponent]
    });
    fixture = TestBed.createComponent(CompanyProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
