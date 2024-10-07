import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Cliente } from '../../services/cliente/cliente.service';
@Component({
  selector: 'app-accept-package',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './accept-package.component.html',
  styleUrl: './accept-package.component.css'
})
export class AcceptPackageComponent implements OnInit{
  cliente : Cliente= {
    name: "",
    lastname: "",
    localidad: "",
    email: "",
    password: ""
  }
  ngOnInit(): void {
  let clienteActualizado = localStorage.getItem("cliente");
  if(clienteActualizado){
    try {
      this.cliente = JSON.parse(clienteActualizado);
    } catch (error) {
      alert("Error al parsear cliente:" + error);
    }
  }
  }
header= {
  button_1: "Ver paquetes seleccionados",
  button_2: "Mis propuestas", 
  button_3: "Añadir propuesta",
  ruta_1:"",
  ruta_2:"viewProposals",
  ruta_3:"addProposal"
}
}
