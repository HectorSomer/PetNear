import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { VeterinariaService, Veterinaria } from '../../services/veterinaria/veterinaria.service';
@Component({
  selector: 'app-register-veterinaria',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-veterinaria.component.html',
  styleUrl: './register-veterinaria.component.css'
})
export class RegisterVeterinariaComponent {
  namesForm : FormGroup;
  infoForm : FormGroup;
  veterinarias : Veterinaria[] = [];
  veterinariaLog: Veterinaria = {
    name: "",
    lastname: "",
    localidad: "",
    nombre_negocio: "",
    email: "",
    password: ""
  }
  constructor(private veterinariaService : VeterinariaService, private router: Router){
    this.namesForm = new FormGroup({
      name : new FormControl('',Validators.required),
      lastName : new FormControl('', Validators.required),
      location: new FormControl("", Validators.required)
    });
    this.infoForm = new FormGroup({
     localName: new FormControl("", Validators.required),
     email: new FormControl("", Validators.email),
     password: new FormControl("", Validators.required)
    });
  }
 addVeterinaria(){
  let veterinaria : Veterinaria ={
    name: this.namesForm.value.name,
    lastname: this.namesForm.value.lastName,
    localidad: this.namesForm.value.location,
    nombre_negocio: this.infoForm.value.localName,
    email: this.infoForm.value.email,
    password: this.infoForm.value.password
  }
    if(this.veterinariaService.registerVeterinaria(veterinaria)){
      if (this.namesForm.invalid || this.namesForm.untouched || this.infoForm.invalid || this.infoForm.untouched) {
        alert("Error en el formulario");
      }
      else {
        alert("Se registró con éxito")
        localStorage.setItem("veterinaria", JSON.stringify(veterinaria))
        this.router.navigate(['/proposales']);
      }
    }else{
      alert("El correo eléctrónico ya existe..., o no ha ingresado bien los datos")
    }
}
}
