import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { TaskformComponent } from './taskform/taskform.component';
import { TaskupdateComponent } from './taskupdate/taskupdate.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'tasks/:id', component: TaskupdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
