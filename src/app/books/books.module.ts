import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books.routing.module';
import { BooksComponent } from './books.component';
import { GoMaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    GoMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    BooksComponent
  ]
})
export class BooksModule { }
