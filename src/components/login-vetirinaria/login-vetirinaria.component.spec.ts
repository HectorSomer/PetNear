import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginVetirinariaComponent } from './login-vetirinaria.component';

describe('LoginVetirinariaComponent', () => {
  let component: LoginVetirinariaComponent;
  let fixture: ComponentFixture<LoginVetirinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginVetirinariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginVetirinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
