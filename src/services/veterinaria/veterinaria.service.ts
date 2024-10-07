import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {
  private incrementId =0;
  constructor() { }
  private veterinarias: Veterinaria[]=[]
  public registerVeterinaria(veterinaria: Veterinaria): boolean {
    let allVeterinarias = localStorage.getItem("veterinarias");  
    if (allVeterinarias) {
      try {
        this.veterinarias = JSON.parse(allVeterinarias);
        if (this.veterinarias.length > 0) {
          let ultimoIndex = this.veterinarias.length - 1;
            this.incrementId = this.veterinarias[ultimoIndex].id! +1; 
        }
      } catch (error) {
        return false;
      }
    }
    veterinaria.id = this.incrementId;
    this.veterinarias.push(veterinaria); 
    this.incrementId++;
    localStorage.setItem("veterinarias", JSON.stringify(this.veterinarias));
    return true;
  }
  public getVeterinaria(){
    let veterinarias = localStorage.getItem("veterinarias");
    return veterinarias;
  }
}
export interface Veterinaria {
  id?:number,
  name: string,
  lastname: string,
  localidad: string,
  nombre_negocio:string,
  email:string,
  password:string
}