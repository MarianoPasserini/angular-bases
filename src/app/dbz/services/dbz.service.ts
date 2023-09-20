import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
console.log(uuid());
@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 15000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 8500
  },{
    id: uuid(),
    name: 'Trunks',
    power: 15000
  }
];


  addCharacter(character: Character):void {
    const newCharacter: Character = {
      ...character,
      id: uuid()
    };


    this.characters.push(newCharacter);
    }

  // onDeleteCharacter(index: number):void {
  //   this.characters.splice(index, 1);
  // }

  DeleteCharacterById(id: string): void{
    console.log(id)
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }

}
