export class Operation {
	
    private numeroOperation: Number; 
    private numeroCompte: Number;
    private typeOperation: Number; // nombre impair : débit, nombre pair : crédit
                                // 1 : retrait espèces, 2 : dépôt espèces
                                // 3 : virement émis, 4 : virement reçu
                                // 5 : chèque émis, 6 : chèque reçu
                                // 7: remboursement de frais, 8 : frais divers
		private montant: Number; // c'est un nombre positif
    private libelle: String;
    private dateOperation : Date;
    private nomContrepartie : String;
    private RIBContrepartie : String;

	/**
	 * on a obligatoirement besoin d'un compte pour creer une opération 
	 */

	

	public constructor (numeroOperation: Number ,numeroCompte: Number, typeOperation: Number,  montant: Number, libelle: String, dateOperation : Date, nomContrepartie : String, RIBContrepartie : String){
		this.numeroOperation = numeroOperation;
		this.numeroCompte = numeroCompte;
		this.typeOperation = typeOperation;
		this.montant = montant;
        this.libelle = libelle;
        this.dateOperation = dateOperation;
        this.nomContrepartie = nomContrepartie;
        this.RIBContrepartie = RIBContrepartie;
        

	}

	public getNumeroOperation(): Number {
		return this.numeroOperation;
	}
	public setNumeroOperation(value: Number) {
		this.numeroOperation = value;
    }
    
    public getNumeroCompte(): Number {
		return this.numeroCompte;
	}
	public setNumeroCompte(value: Number) {
		this.numeroCompte = value;
    }
    
    public getTypeOperation(): Number {
		return this.typeOperation;
	}
	public setTypeOperation(value: Number) {
		this.typeOperation = value;
    }
    
    public getMontant(): Number {
		return this.montant;
	}
	public setMontant(value: Number) {
		this.montant = value;
    }
    
    public getLibelle(): String {
		return this.libelle;
	}
	public setLibelle(value: String) {
		this.libelle = value;
    }
    
    public getDateOperation(): Date {
		return this.dateOperation;
	}
	public setDateOperation(value: Date) {
		this.dateOperation = value;
    }
    
    public getNomContrepartie(): String {
		return this.nomContrepartie;
	}
	public setNomContrepartie(value: String) {
		this.nomContrepartie = value;
    }
    
    public getRIBContrepartie(): String {
		return this.RIBContrepartie;
	}
	public setRIBContrepartie(value: String) {
		this.RIBContrepartie = value;
    }
    

	
}
