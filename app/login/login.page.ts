import { Component, OnInit } from '@angular/core';
// Importaoms todas las herramientas que vamos a necesitar para el formulario de login
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Creo una nueva propiedad de la clase
  formLogin: FormGroup;


  // Ahora declaro como un atributo dentro de esta clase
  constructor(public fb: FormBuilder) {
    // Inicializar el formulario
    this.formLogin= this.fb.group({
      "nombre":new FormControl("", Validators.required),
      "contraseña":new FormControl("", Validators.required),
    })
   }
  


  ngOnInit() {
  }

}
