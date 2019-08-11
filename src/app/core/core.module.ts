import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
