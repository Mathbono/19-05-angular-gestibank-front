import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ConseillerComponent } from './conseiller/conseiller.component';

const conseillerRoutes: Routes = [
  {
    path: '',
    component: ConseillerComponent,
    children: [
      {
        path: '',
        component: ConseillerComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ConseillerComponent],
  imports:
  [ 
    RouterModule.forChild(conseillerRoutes),
    CommonModule
  ]
})
export class ConseillerModule { }
