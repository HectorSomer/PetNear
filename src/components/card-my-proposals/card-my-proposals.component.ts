import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Proposal } from '../../services/proposal/proposal.service';
import { Output, EventEmitter } from '@angular/core';

import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-card-my-proposals',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-my-proposals.component.html',
  styleUrl: './card-my-proposals.component.css'
})
export class CardMyProposalsComponent {
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
@Output() editEvent = new EventEmitter<number>();
  editProposal() {
    this.editEvent.emit(this.proposalsThis.id);
  }
  @Output() deleteEvent = new EventEmitter<number>();
  deleteProposal(){
    this.deleteEvent.emit(this.proposalsThis.id)
  }
}
