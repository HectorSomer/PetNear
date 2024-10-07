import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router} from '@angular/router';
import { ProposalService } from '../../services/proposal/proposal.service';
import { ClienteService } from '../../services/cliente/cliente.service';
@Component({
  selector: 'app-login-cliente',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-cliente.component.html',
  styleUrl: './login-cliente.component.css'
})
export class LoginClienteComponent {
  login : FormGroup;
  constructor(private cliente : ClienteService, private route: Router){
    this.login = new FormGroup({
      email: new FormControl("", Validators.email),
      password: new FormControl("", Validators.required),
    })
  }
  loginNew(){
    let clienteLog =this.cliente.login(this.login.value.email, this.login.value.password);
       if(clienteLog != null){
        alert("Ha iniciado sesión")
        this.route.navigate(["/viewProposals"])
        localStorage.setItem("cliente", JSON.stringify(clienteLog) )
       }else{
        alert("Error al iniciar sesión, email o contraseña incorrecta")
       }
  }
}
