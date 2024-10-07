import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptProposaleComponent } from './accept-proposale.component';

describe('AcceptProposaleComponent', () => {
  let component: AcceptProposaleComponent;
  let fixture: ComponentFixture<AcceptProposaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptProposaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptProposaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
