import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private incrementId = 0;
  private clientes: Cliente[] = [];

  public login(email: string, password: string): Cliente | null{
    let allClientes = localStorage.getItem("clientes");  
    if (allClientes) {
      try {
        this.clientes = JSON.parse(allClientes);
      } catch (error) {
        return null;
      }
    }
    let index = this.clientes.findIndex(cliente => cliente.email === email && cliente.password===password);
    let cliente: Cliente | null;
    if (index !== -1){
         cliente = this.clientes[index]
    }else{
      cliente = null;
    }
    return cliente ;
  }
  public registerCliente(cliente: Cliente): boolean {
    let clientesLog = localStorage.getItem("clientes");
    let email = false;
    if (clientesLog) {
      try {
        this.clientes = JSON.parse(clientesLog);
        if (this.clientes.length > 0) {
          this.incrementId = this.clientes[this.clientes.length - 1].id! + 1;
        }
      } catch (error) {
        return false;
      }
    }
    this.clientes.forEach((buscar) => {
      if (buscar.email == cliente.email) {
        email = true;
      }
    });
    if (!email) {
      cliente.id = this.incrementId++;
      this.clientes.push(cliente);
      localStorage.setItem("clientes", JSON.stringify(this.clientes));
      return true;
    } else {
      return false; 
    }
  }
}

export interface Cliente {
  id?: number;
  name: string;
  lastname: string;
  localidad: string;
  email: string;
  password: string;
}