import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Proposal, ProposalService } from '../../services/proposal/proposal.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-card-proposals',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card-proposals.component.html',
  styleUrl: './card-proposals.component.css'
})
export class CardProposalsComponent {
  @Input() proposalsThis : Proposal = {
    id: 0,
    description: "",
    person_name: "",
    person_lastname: "",
    pet: "", 
    date: "",
    time: "",
    price: 0,
    location: "", 
    status: "",
    id_client: 0
  }
  priceForm : FormGroup;
  constructor(){
    this.priceForm = new FormGroup ({
      price: new FormControl("", Validators.required)
    })
  }
  @Output() addPriceEvent = new EventEmitter<{
    id: number | undefined,
    price : number
  }>();
  acceptProposal(){
    this.addPriceEvent.emit({id:this.proposalsThis.id,price : this.priceForm.value.price})
  }
}
