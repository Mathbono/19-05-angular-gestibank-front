export class Ouverture 
{
    private _numComd: Number;
    private _status: string;
    private _type: string;
    private _dateDemande: string;
    private _dateAfectation: string;
    private _dateTraitement: string;
    private _nom: string;
    private _prenom: string;
    private _email: string;


    public get numComd(): Number {
        return this._numComd;
    }
    public set numComd(value: Number) {
        this._numComd = value;
    }
   
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
   
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    
    public get dateDemande(): string {
        return this._dateDemande;
    }
    public set dateDemande(value: string) {
        this._dateDemande = value;
    }
 
    public get dateAfectation(): string {
        return this._dateAfectation;
    }
    public set dateAfectation(value: string) {
        this._dateAfectation = value;
    }
   
    public get dateTraitement(): string {
        return this._dateTraitement;
    }
    public set dateTraitement(value: string) {
        this._dateTraitement = value;
    }
    
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
   
    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }
   
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    constructor ( numComd, status, type, dateDemande, dateAfectation, dateTraitement, nom, prenom, email)
    {
        this._numComd =  numComd;
        this._status= status;
        this. _type = type;
        this. _dateDemande = dateDemande;
        this. _dateAfectation = dateAfectation;
        this. _dateTraitement = dateTraitement;
        this. _nom = nom
        this. _prenom = prenom;
        this. _email = email;
  
}
}