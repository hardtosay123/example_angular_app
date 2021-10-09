import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { FormsModule } from '@angular/forms';
import { PublicComponent } from './public.component';
import { TaskformComponent } from './taskform/taskform.component';
import { TaskupdateComponent } from './taskupdate/taskupdate.component';


@NgModule({
  declarations: [
    PublicComponent,
    TaskformComponent,
    TaskupdateComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule
  ]
})
export class PublicModule { }
