import { Personnage } from "./PersonnageModel";

export class Groupe {

    public _tab_personnages: Personnage[];
  
   constructor(tab_personnages) {
    this._tab_personnages = tab_personnages;
  }
}
  