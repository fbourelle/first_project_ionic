export class Personnage {
  public _name: string ;
  public _function: string ;
  public _avatar: string;

  constructor(name: string, fonction: string, avatar: string) {
    this._name = name;
    this._function = fonction;
    this._avatar = avatar;
  }
}
