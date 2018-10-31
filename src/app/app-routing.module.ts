import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { FormdataComponent } from './components/formdata/formdata.component';

const routes: Routes = [
  {path: '', component: FormComponent },
  {path: 'form', component: FormComponent },
  {path: 'formdata', component: FormdataComponent}
  ]



@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
