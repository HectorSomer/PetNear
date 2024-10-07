import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProposalsComponent } from './card-proposals.component';

describe('CardProposalsComponent', () => {
  let component: CardProposalsComponent;
  let fixture: ComponentFixture<CardProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProposalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
