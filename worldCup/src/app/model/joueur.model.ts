export class Joueur {
    id : number;
    nom : string;
    prenom: string;
    age : number;
    numero : number;
    image: string;
    poste : string;

    constructor(nom : string, prenom: string, age : number, numero : number, poste : string) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.numero =numero;
        this.poste = poste;
    }


}