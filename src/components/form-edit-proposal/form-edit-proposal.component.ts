import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Proposal, ProposalService } from '../../services/proposal/proposal.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Cliente } from '../../services/cliente/cliente.service';
@Component({
  selector: 'app-form-edit-proposal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-edit-proposal.component.html',
  styleUrl: './form-edit-proposal.component.css'
})
export class FormEditProposalComponent {
  proposalForm : FormGroup;
  constructor(private proposal: ProposalService, private route: Router, private location: Location){
    this.proposalForm = new FormGroup({
      description: new FormControl(""),
      pet: new FormControl(""),
      date: new FormControl (""),
      time: new FormControl ("")
    })
  }
  back(){
    this.location.back()
  }
  editProposal(){
    let editProposal = localStorage.getItem("editProposal");
    let idProposal : number;
    let clienteLog : Cliente;
    let cliente = localStorage.getItem("cliente");
    if(cliente){
      clienteLog = JSON.parse(cliente)
      if(editProposal){
        try {
        idProposal = parseInt(editProposal);
        let proposal : Proposal ={
        id: idProposal!,
        description: this.proposalForm.value.description,
        person_name: clienteLog.lastname,
        person_lastname: clienteLog.name,
        pet: this.proposalForm.value.pet, 
        date: this.proposalForm.value.date,
        time: this.proposalForm.value.time,
        location: clienteLog.localidad, 
        status: "Pendiente",
        id_client:  clienteLog.id
        }
        if(this.proposal.editProposal(proposal)){
          alert("Propuesta editada con éxito")
          this.back();
        }else{
          alert("Ha habido un error al editar la propuesta")
        }
        } catch (error) {
          alert("Ha habido un error en el parseo")
        }
        }else{
          alert("Ha ocurrido un mal parseo")
        }
    }
   
  }
}
