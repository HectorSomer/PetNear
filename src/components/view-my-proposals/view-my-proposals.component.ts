import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Cliente } from '../../services/cliente/cliente.service';
import { CardMyProposalsComponent } from '../card-my-proposals/card-my-proposals.component';
import { CommonModule } from '@angular/common';
import { Proposal, ProposalService } from '../../services/proposal/proposal.service';
import { Router } from '@angular/router';
import { console } from 'inspector';
@Component({
  selector: 'app-view-my-proposals',
  standalone: true,
  imports: [HeaderComponent, CardMyProposalsComponent, CommonModule],
  templateUrl: './view-my-proposals.component.html',
  styleUrl: './view-my-proposals.component.css'
})
export class ViewMyProposalsComponent {
  header= {
    button_1: "Ver paquetes seleccionados",
    button_2: "Paquetes", 
    button_3: "Añadir propuesta",
    ruta_1:"",
    ruta_2:"/packages",
    ruta_3:"/addProposal"
  }
  cliente : Cliente= {
    name: "",
    lastname: "",
    localidad: "",
    email: "",
    password: "",
  }
  deleteProposal($event: number){
    let proposales = this.proposalService.getProposals();
    let size = this.proposalService.deleteProposal($event)
    if(proposales!.length> size){
      alert("Eliminado con éxtio")
    }else{
      alert("Fallo al eliminar")
    }
  }
  editProposal($event: number){
    let editProposal = $event;
      localStorage.setItem("editProposal", JSON.stringify(editProposal))
  }
  proposalsAceptadas : Proposal[] | null=[];
  proposalsRecibidas: Proposal[] | null= [];
  proposalsPendientes: Proposal[] | null= [];
  constructor(private proposalService : ProposalService){}
  ngOnInit(): void {
    let clienteLog= localStorage.getItem("cliente");
    if(clienteLog){
      try {
      this.cliente = JSON.parse(clienteLog);
      } catch (error) {
        alert("Ha ocurrido un error")
      }
    }
    this.proposalsAceptadas = this.proposalService.getProposalsAceptadasWithId(this.cliente.id);
    this.proposalsRecibidas = this.proposalService.getProposalsRecibidasWithId(this.cliente.id);  
    this.proposalsPendientes = this.proposalService.getProposalsPendientesWithId(this.cliente.id);
  }
}
