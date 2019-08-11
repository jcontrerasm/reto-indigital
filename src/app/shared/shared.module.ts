import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form-module/forms.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormModule,
    HttpClientModule
  ]
})
export class SharedModule { }
