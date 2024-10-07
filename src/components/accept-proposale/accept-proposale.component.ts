import { Component} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Proposal } from '../../services/proposal/proposal.service';
import { Veterinaria } from '../../services/veterinaria/veterinaria.service';
import { ProposalService } from '../../services/proposal/proposal.service';
import { CardProposalsComponent } from '../card-proposals/card-proposals.component';
@Component({
  selector: 'app-accept-proposale',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CardProposalsComponent],
  templateUrl: './accept-proposale.component.html',
  styleUrl: './accept-proposale.component.css'
})
export class AcceptProposaleComponent {
   header ={
    button_1: "Ver propuestas aceptadas",
    button_2: "Mis paquetes",
    button_3: "Añadir Paquete",
    ruta_1:"",
    ruta_2: "",
    ruta_3: ""
  }
  veterinaria: Veterinaria= {
    id: 0,
  name: "",
  lastname: "",
  localidad: "",
  nombre_negocio:"",
  email:"",
  password:""
  }
  proposalsAceptadas : Proposal[] =[];
  proposalsRecibidas : Proposal[] = [];
  proposalsPendientes : Proposal[] = [];
  constructor(private proposalService : ProposalService){}
  ngOnInit(): void {
    let veterinariaLog= localStorage.getItem("veterinaria");
    if(veterinariaLog){
      try {
      this.veterinaria = JSON.parse(veterinariaLog);
      } catch (error) {
        alert("Ha ocurrido un error")
      }
    }
    this.proposalsAceptadas = this.proposalService.getProposalsAceptadasWithIdVeterinaria(this.veterinaria.id);
    this.proposalsRecibidas = this.proposalService.getProposalsRecibidasWithIdVeterinaria(this.veterinaria.id);  
    this.proposalsPendientes = this.proposalService.getAllProposalsPendientes();
  }
}
