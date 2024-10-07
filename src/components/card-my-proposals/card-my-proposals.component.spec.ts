import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyProposalsComponent } from './card-my-proposals.component';

describe('CardMyProposalsComponent', () => {
  let component: CardMyProposalsComponent;
  let fixture: ComponentFixture<CardMyProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMyProposalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMyProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
