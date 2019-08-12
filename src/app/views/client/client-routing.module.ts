import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/core/components/layout/layout.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { ClientListComponent } from './components/client-list/client-list.component';

const clientRegisterRoutes: Routes = [
  {
    path: 'client',
    component: LayoutComponent,
    children: [
      { path: 'register', component: RegisterFormComponent },
      { path: 'list', component: ListComponent },
      { path: 'list/:id', component: DetailComponent },
      { path: 'client-list', component: ClientListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(clientRegisterRoutes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
