import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 15000,
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

    DeleteCharacterById(id: string):void {
      this.onDelete.emit(id);
    }

}
