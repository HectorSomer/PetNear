import { Component } from '@angular/core';
import { Cliente } from '../../services/cliente/cliente.service';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Proposal, ProposalService } from '../../services/proposal/proposal.service';
import { OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-proposal',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-proposal.component.html',
  styleUrl: './add-proposal.component.css'
})
export class AddProposalComponent implements OnInit{
 cliente : Cliente = {
  name: "",
  lastname: "",
  localidad: "",
  email:"",
  password:""
 }
 receiveMessage($event:string){
  alert($event)
}
  proposalForm : FormGroup;
  constructor(private proposal: ProposalService, private route: Router, private location: Location){
    this.proposalForm = new FormGroup({
      description: new FormControl("", Validators.required),
      pet: new FormControl("", Validators.required),
      date: new FormControl ("", Validators.required),
      time: new FormControl ("", Validators.required)
    })
  }
  ngOnInit(): void {
    let clienteLog = localStorage.getItem("cliente");
    if(clienteLog){
      try{
        this.cliente = JSON.parse(clienteLog)
      }catch(error){
        alert("Algo ha salido mal"+error)
      }
    }
  }
  back(){
    this.location.back()
  }
  addProposal(){
    let proposal : Proposal = {
      description: this.proposalForm.value.description,
     person_name: this.cliente.name,
  person_lastname: this.cliente.lastname,
   pet: this.proposalForm.value.pet, 
  date: this.proposalForm.value.date,
  time: this.proposalForm.value.time,
  location: this.cliente.localidad,
  status: "Pendiente", 
  id_client: this.cliente.id
    }
    if(this.proposalForm.invalid || this.proposalForm.untouched){
      alert("Por favor rellene bien los campos, y completelos")
    }else{
      if(this.proposal.addProposal(proposal)){
        alert("Propuesta agregada con éxito")
        this.location.back(); 
      }else{
        alert("Ups, algo ha salido mal")
      }
    }
  }
}
