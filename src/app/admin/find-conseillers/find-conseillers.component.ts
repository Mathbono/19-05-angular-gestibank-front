import { Component, OnInit } from '@angular/core';
import {ConseillerService}  from '../../conseiller/conseiller.service';

@Component({
  selector: 'app-find-conseillers',
  templateUrl: './find-conseillers.component.html',
  styleUrls: ['./find-conseillers.component.css']
})

export class FindConseillersComponent implements OnInit
 {

  ngOnInit(): void 
  {
    throw new Error("Method not implemented.");
  }

  constructor(private lstc: ConseillerService) {  }

    
   // lstc.getAll();
      // recupeer depuis un service la liste es conseillers
	    // afficher dans le template

 

}
