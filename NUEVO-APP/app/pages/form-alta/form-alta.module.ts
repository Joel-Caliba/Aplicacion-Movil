import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAltaPageRoutingModule } from './form-alta-routing.module';

import { FormAltaPage } from './form-alta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAltaPageRoutingModule
  ],
  declarations: [FormAltaPage]
})
export class FormAltaPageModule {}
