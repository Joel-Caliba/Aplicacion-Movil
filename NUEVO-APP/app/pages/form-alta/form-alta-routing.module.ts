import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAltaPage } from './form-alta.page';

const routes: Routes = [
  {
    path: '',
    component: FormAltaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAltaPageRoutingModule {}
