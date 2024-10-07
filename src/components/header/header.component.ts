import { Component} from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input() header ={
 button_1: "",
 button_2:"",
 button_3:"",
 ruta_1:"",
 ruta_2:"",
 ruta_3:""
}
logout(){
  localStorage.removeItem("cliente")
}
}
