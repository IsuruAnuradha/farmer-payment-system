import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileComponent } from './file.component';
import { SuplierComponent }   from './suplier/suplier.component';


const routes: Routes = [{
    path: '',
    component: FileComponent,
    children: [{
      path: 'supplier',
      component: SuplierComponent,
    }],
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class FileRoutingModule { }

 export const routedComponents = [
    FileComponent,SuplierComponent
 ];