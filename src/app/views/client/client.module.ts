import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ClientRoutingModule } from './client-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientService } from './services/client.service';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { ClientListComponent } from './components/client-list/client-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ClientRoutingModule
  ],
  declarations: [RegisterFormComponent, ListComponent, DetailComponent, ClientListComponent],
  providers: [ClientService]
})
export class ClientModule { }
