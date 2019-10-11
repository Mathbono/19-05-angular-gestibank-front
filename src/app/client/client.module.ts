import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InterfaceClientComponent } from './interface-client/interface-client.component';
import { GestionDesIdentifiantsComponent } from './gestion-des-identifiants/gestion-des-identifiants.component';
import { InformationsPersonnellesComponent } from './informations-personnelles/informations-personnelles.component';
import { PreferencesNotificationsComponent } from './preferences-notifications/preferences-notifications.component';
import { HistoriqueComptesComponent } from './historique-comptes/historique-comptes.component';
import { FaireUnVirementComponent } from './faire-un-virement/faire-un-virement.component';
import { DemandeDeChequiersComponent } from './demande-de-chequiers/demande-de-chequiers.component';
import { DemandeDeModificationComponent } from './demande-de-modification/demande-de-modification.component';
import { MessagerieDuClientComponent } from './messagerie-du-client/messagerie-du-client.component';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';

const clientRoutes: Routes = [
  {
    path: '',
    component: InterfaceClientComponent,
    children: [
      {
        path: '',
        component: InterfaceClientComponent
      },
      {
        path: 'infopers',
        component: InformationsPersonnellesComponent
      },
      {
        path: 'prefnotif',
        component: PreferencesNotificationsComponent
      },
      {
        path: 'histcompt',
        component: HistoriqueComptesComponent
      },
      {
        path: 'prefnot',
        component: FaireUnVirementComponent
      },
      {
        path: 'demcheq',
        component: DemandeDeChequiersComponent
      },
      {
        path: 'demmodif',
        component:  DemandeDeModificationComponent
      },
      {
        path: 'messagclient',
        component:  MessagerieDuClientComponent
      },
      {
        path: 'creatcompte',
        component:  CreationCompteComponent
      }
    ]
  }
];

@NgModule({
  declarations:
  [
    InterfaceClientComponent, 
    GestionDesIdentifiantsComponent, 
    InformationsPersonnellesComponent, 
    PreferencesNotificationsComponent, 
    HistoriqueComptesComponent, 
    FaireUnVirementComponent, 
    DemandeDeChequiersComponent, 
    DemandeDeModificationComponent, 
    MessagerieDuClientComponent,
    CreationCompteComponent
  ],
  imports:
  [ 
    RouterModule.forChild(clientRoutes),
    CommonModule
  ]
})
export class ClientModule { }
