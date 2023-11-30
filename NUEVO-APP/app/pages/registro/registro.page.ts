import { Component, OnInit } from '@angular/core';
// Importaoms todas las herramientas que vamos a necesitar para el formulario de login
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  formRegistro: FormGroup

  constructor(public fb: FormBuilder) {
    // Inicializar el formulario
    this.formRegistro= this.fb.group({
      "nombre":new FormControl("", Validators.required),
      "contraseña":new FormControl("", Validators.required),
      "confirarContraseña":new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  // Funcion para guardar datos
  registrar(){
    console.log("HOLAAA");
  }

  recargarPagina() {
    window.location.reload();
  }
}
