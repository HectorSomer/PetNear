import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptPackageComponent } from './accept-package.component';

describe('AcceptPackageComponent', () => {
  let component: AcceptPackageComponent;
  let fixture: ComponentFixture<AcceptPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
