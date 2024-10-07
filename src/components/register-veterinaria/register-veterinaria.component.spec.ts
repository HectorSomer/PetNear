import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterVeterinariaComponent } from './register-veterinaria.component';

describe('RegisterVetirinariaComponent', () => {
  let component: RegisterVeterinariaComponent;
  let fixture: ComponentFixture<RegisterVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterVeterinariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
