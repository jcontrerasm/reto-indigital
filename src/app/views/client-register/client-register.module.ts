import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ClientRegisterRoutingModule } from './client-register-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ClientRegisterRoutingModule
  ],
  declarations: [RegisterFormComponent]
})
export class ClientRegisterModule { }
