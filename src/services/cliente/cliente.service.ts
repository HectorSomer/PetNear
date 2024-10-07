import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private incrementId = 0;
  private clientes: Cliente[] = [];

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

  constructor() { }
}

export interface Cliente {
  id?: number;
  name: string;
  lastname: string;
  localidad: string;
  email: string;
  password: string;
}