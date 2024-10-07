import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyProposalsComponent } from './view-my-proposals.component';

describe('ViewMyProposalsComponent', () => {
  let component: ViewMyProposalsComponent;
  let fixture: ComponentFixture<ViewMyProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMyProposalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
