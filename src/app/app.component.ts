import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginVetirinariaComponent } from '../components/login-vetirinaria/login-vetirinaria.component';
import { RouterLink } from '@angular/router';
import { LoginClienteComponent } from '../components/login-cliente/login-cliente.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginVetirinariaComponent, RouterLink, LoginClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppWebPractica';
}
