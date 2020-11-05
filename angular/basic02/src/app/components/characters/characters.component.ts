import { Component, OnInit } from '@angular/core';
import { CharactersService } from './../../services/characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: [] = [];
  constructor(private service: CharactersService) {}
  async ngOnInit() {
    const characters: any = await this.service.all();
    console.log(characters);
    this.characters = characters.results;
  }
}
