import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  private incrementId = 0;
  private proposals : Proposal[]= [];
  public addProposal(proposal: Proposal): boolean {
    let allProposals = localStorage.getItem("proposals");  
    if (allProposals) {
      try {
        this.proposals = JSON.parse(allProposals);
        if (this.proposals.length > 0) {
          let ultimoIndex = this.proposals.length - 1;
            this.incrementId = this.proposals[ultimoIndex].id! +1; 
        }
      } catch (error) {
        return false;
      }
    }
    proposal.id = this.incrementId;
    this.proposals.push(proposal); 
    this.incrementId++;
    localStorage.setItem("proposals", JSON.stringify(this.proposals));
    return true;
  }
  getAllProposalsPendientes(): Proposal[]{
    let proposalsId = this.getProposals()
    let proposalsPendientes : Proposal[] =[]; 
      if(proposalsId){
         proposalsId.forEach(proposal => {
          if(proposal.status == "Pendiente"){
            proposalsPendientes.push(proposal);
          }
         });
         return proposalsPendientes
      }else{
        return proposalsPendientes;
      }
  }
  public getProposalsAceptadasWithIdVeterinaria(id_veterinaria?: number): Proposal[]{
    let proposalsId = this.getProposalsByIdVeterinaria(id_veterinaria);
    let proposalsRecibidas: Proposal[]=[];
    if(proposalsId){
       proposalsId.forEach(proposal => {
        if(proposal.status == "Aceptada"){
          proposalsRecibidas.push(proposal);
        }
       });
       return proposalsRecibidas;
    }else{
      return proposalsRecibidas;
    }
  }
  public getProposalsRecibidasWithIdVeterinaria(id_veterinaria?: number): Proposal[]{
    let proposalsId = this.getProposalsByIdVeterinaria(id_veterinaria);
    let proposalsRecibidas: Proposal[]=[];
    if(proposalsId){
       proposalsId.forEach(proposal => {
        if(proposal.status == "Recibido"){
          proposalsRecibidas.push(proposal);
        }
       });
       return proposalsRecibidas;
    }else{
      return proposalsRecibidas;
    }
  }
  public getProposals(): Proposal[] | null{
    let proposalss= localStorage.getItem("proposals");
    if(proposalss){
      try {
        this.proposals= JSON.parse(proposalss);
        return this.proposals;
      } catch (error) {
        return null
      }
    }else{
      return null;
    }
  }
  public getProposalsByIdVeterinaria(id_veterinaria?: number): Proposal[] | null{
    let allProposals : Proposal[] = [];
    let proposals = localStorage.getItem("proposalsRecives");
    let proposalsId : Proposal[]=[];
    if(proposals){
      try {
        allProposals = JSON.parse(proposals)
        allProposals.forEach(proposals => {
          if(id_veterinaria == proposals.id_veterinaria){
            proposalsId.push(proposals)
          }
        });
        return proposalsId;
      } catch (error) {
        return null
      }
    }else{
      return proposalsId;
    }
  }
  public getProposalById(id?: number): Proposal | null {
    let allProposals : Proposal[] = [];
    let proposals = localStorage.getItem("proposals");
    let proposal : Proposal | null = null;
    if(proposals){
      try {
        allProposals = JSON.parse(proposals)
        allProposals.forEach(proposalId => {
          if(id == proposalId.id){
            proposal = proposalId
          }
        });
      } catch (error) {
        proposal = null;
      }
    }else{
      proposal = null;
    }
    return proposal;
  }
  public getProposalsByIdClient(id_client?: number): Proposal[] | null{
    let allProposals : Proposal[] = [];
    let proposals = localStorage.getItem("proposals");
    let proposalsId : Proposal[]=[];
    if(proposals){
      try {
        allProposals = JSON.parse(proposals)
        allProposals.forEach(proposals => {
          if(id_client == proposals.id_client){
            proposalsId.push(proposals)
          }
        });
        return proposalsId;
      } catch (error) {
        return null
      }
    }else{
      return proposalsId;
    }
  }
  public getProposalsPendientesWithId(id_client?: number): Proposal[]{ 
  let proposalsId = this.getProposalsByIdClient(id_client)
  let proposalsPendientes : Proposal[] =[]; 
    if(proposalsId){
       proposalsId.forEach(proposal => {
        if(proposal.status == "Pendiente"){
          proposalsPendientes.push(proposal);
        }
       });
       return proposalsPendientes
    }else{
      return proposalsPendientes;
    }
  }
  public getProposalsRecibidasWithId(id_client?: number): Proposal[]{
    let proposalsId = this.getProposalsByIdClient(id_client);
    let proposalsRecibidas: Proposal[]=[];
    if(proposalsId){
       proposalsId.forEach(proposal => {
        if(proposal.status == "Recibido"){
          proposalsRecibidas.push(proposal);
        }
       });
       return proposalsRecibidas;
    }else{
      return proposalsRecibidas;
    }
  }
  public deleteProposal (id: number): number {
    let allProposals = localStorage.getItem("proposals");  
    if (allProposals) {
      try {
        this.proposals = JSON.parse(allProposals);
        if (this.proposals.length > 0) {
          this.incrementId = this.proposals[this.proposals.length - 1].id! + 1; 
        }
      } catch (error) {
        return -1;
      }
    }
  
    let index = this.proposals.findIndex(proposal => proposal.id === id );
    let num = 0;

    if (index !== -1){
      num = this.proposals.splice(index,1).length;
      localStorage.setItem("proposals", JSON.stringify(this.proposals))
    }
    return num;
  }
  public editProposal(updateProposal: Proposal): boolean{
    let allProposals = localStorage.getItem("proposals");
    let flag = false;
    if (allProposals) {
      try {
        this.proposals = JSON.parse(allProposals);
        flag = true;
      } catch (error) {
        flag= false;
      }
    }
    if(flag){
      let index = this.proposals.findIndex(proposal => proposal.id === updateProposal.id );
      if (index != -1){
        let proposalExistence= this.proposals[index];
        if(updateProposal.date){
          proposalExistence.date = updateProposal.date
        }
        if(updateProposal.time){
          proposalExistence.time=updateProposal.time
        }
        if(updateProposal.pet){
          proposalExistence.pet= updateProposal.pet
        }
        if(updateProposal.description){
          proposalExistence.description = updateProposal.description
        }
        if(updateProposal.status){
          proposalExistence.status = updateProposal.status
        }
        if(updateProposal.price){
          proposalExistence.price = updateProposal.price
        }
        this,this.proposals[index] = proposalExistence;
        localStorage.setItem("proposals", JSON.stringify(this.proposals))
        flag= true;
      }else{
        flag= false
      }
    }
    return flag;
  }
  public getProposalsAceptadasWithId(id_client?: number): Proposal[] | null{
  let proposalsId = this.getProposalsByIdClient(id_client)
    let proposalsAceptadas : Proposal[] = [];
    if(proposalsId){
      proposalsId.forEach(proposal =>{
        if(proposal.status == "Aceptado"){
           proposalsAceptadas.push(proposal)
        }
      });
      return proposalsAceptadas;
    }else{
      return proposalsAceptadas;
    }
  }
  constructor() { }
}
export interface Proposal{
  id?: number,
  description: string,
  person_name: string,
  person_lastname: string,
  pet: string, 
  date: string,
  time: string,
  price?: number,
  location: string, 
  status: string
  id_client?: number
  id_veterinaria?: number
}