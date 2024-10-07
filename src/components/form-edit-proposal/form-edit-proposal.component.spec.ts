import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditProposalComponent } from './form-edit-proposal.component';

describe('FormEditProposalComponent', () => {
  let component: FormEditProposalComponent;
  let fixture: ComponentFixture<FormEditProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditProposalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
