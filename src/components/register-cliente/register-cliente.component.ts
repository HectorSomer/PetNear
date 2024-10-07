import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../../services/cliente/cliente.service';
import { ClienteService } from '../../services/cliente/cliente.service';
@Component({
  selector: 'app-register-cliente',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register-cliente.component.html',
  styleUrl: './register-cliente.component.css'
})
export class RegisterClienteComponent{
  namesForm : FormGroup;
  infoForm : FormGroup;
  locationForm: FormGroup;
  clientes : Cliente[] = [];
  clienteLog: Cliente = {
    name: "",
    lastname: "",
    localidad: "",
    email: "",
    password: ""
  }
  constructor(private clienteService : ClienteService, private router: Router){
    this.namesForm = new FormGroup({
      name : new FormControl('',Validators.required),
      lastName : new FormControl('', Validators.required),
    });
    this.infoForm = new FormGroup({
     email: new FormControl("", Validators.email),
     password: new FormControl("", Validators.required)
    });
    this.locationForm = new FormGroup({
      location: new FormControl("", Validators.required)
    })
  }
 addCliente(){
  let cliente : Cliente ={
    name: this.namesForm.value.name,
    lastname: this.namesForm.value.lastName,
    localidad: this.locationForm.value.location,
    email: this.infoForm.value.email,
    password: this.infoForm.value.password
  }
    if(this.clienteService.registerCliente(cliente)){
      if (this.namesForm.invalid || this.namesForm.untouched || this.infoForm.invalid || this.infoForm.untouched) {
        alert("Error en el formulario");
      }
      else {
        alert("Se registró con éxito")
        localStorage.setItem("cliente", JSON.stringify(cliente))
        this.router.navigate(['/packages']);
      }
    }else{
      alert("El correo eléctrónico ya existe..., o no ha ingresado bien los datos")
    }
}
}
