import { Component } from '@angular/core';

@Component({
  selector: 'app-form-alta',
  templateUrl: 'form-alta.page.html',
  styleUrls: ['form-alta.page.scss'],
})
export class FormAltaPage {
  formData: any = {};

  submitForm() {
    // Validación básica, asegúrate de que los campos obligatorios estén completos
    if (!this.formData.name || !this.formData.email || !this.formData.password) {
      console.error('Por favor, complete todos los campos.');
      return;
    }

    // Aquí puedes agregar la lógica para enviar los datos al servidor
    // Ejemplo: userService.submitUserData(this.formData).subscribe(response => console.log(response));

    // También puedes reiniciar el formulario después de enviar los datos
    this.resetForm();
  }

  resetForm() {
    // Limpia los campos del formulario
    this.formData = {};
  }
}
