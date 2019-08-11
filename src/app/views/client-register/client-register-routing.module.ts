import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/core/components/layout/layout.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const clientRegisterRoutes: Routes = [
  {
    path: 'register',
    component: LayoutComponent,
    children: [
      { path: '', component: RegisterFormComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(clientRegisterRoutes)],
  exports: [RouterModule]
})
export class ClientRegisterRoutingModule { }
