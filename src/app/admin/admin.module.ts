
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { FindConseillersComponent } from './find-conseillers/find-conseillers.component';
import { ListesComptesComponent } from './listes-comptes/listes-comptes.component';

import { RouterModule, Routes } from '@angular/router';
import { AdminlistComponent } from './adminlist/adminlist.component';

///// services

///// routes
const adminRoutes: Routes =
 [
  { 
    path: '', 
    component: FindConseillersComponent,
    children: [
      { path: './conseiller', component: FindConseillersComponent },
      { path: './conseiller/edit', component: FindConseillersComponent },
      { path: './conseiller/edit/:id', component: FindConseillersComponent },
      { path: './conseiller/delete/:id', component: FindConseillersComponent },
      { path: './ouvertures', component: ListesComptesComponent }
    ]
  }
];

@NgModule
(
  {
   declarations: [AdminComponent, FindConseillersComponent, ListesComptesComponent],
   imports: [
              CommonModule,RouterModule.forChild(adminRoutes)
            ],
   providers: [],
   bootstrap:[AdminComponent]
})

export class AdminModule { }
