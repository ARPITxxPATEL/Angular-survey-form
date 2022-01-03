import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormdataComponent } from './formdata/formdata.component';

const routes: Routes = [
  {  path: '', component: FormComponent},
  { path:'formdata', component: FormdataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }