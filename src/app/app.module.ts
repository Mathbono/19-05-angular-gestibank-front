import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DeviseComponent } from './devise/devise.component';
import { LoginComponent } from './login/login.component';
import { RecuperationComponent } from './recuperation/recuperation.component';

const appRoutes: Routes = [
  {
    path: 'devise',
    component: DeviseComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recuperation',
    component: RecuperationComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'client',
    loadChildren: './client/client.module#ClientModule'
  },
  {
    path: 'conseiller',
    loadChildren: './conseiller/conseiller.module#ConseillerModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DeviseComponent,
    LoginComponent,
    RecuperationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
