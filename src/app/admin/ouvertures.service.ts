import { Injectable } from '@angular/core';
import { Ouverture} from '../model/ouverture';

@Injectable({
  providedIn: 'root'
})


export class OuverturesService 
{

  constructor() { }
  getAll() 
  {
   const fakeOuverture =
    [
     new Ouverture(0,"staus1", "type1", "dt1", "dataf1", "datt1", "nom1", "pren1", "celibatana@gmail.comaire"),

     new Ouverture(0,"staus2", "type2", "dt2", "dataf2",  "datt2", "nom2", "pren2", "celi@gmail.comaire")
   ]
   return fakeOuverture;
 
   }

  // affiche les demandes d'ouvertures de comptes
}
