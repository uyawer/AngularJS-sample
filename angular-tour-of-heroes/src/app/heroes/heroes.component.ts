import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * heroが選択された時に動作するメソッド
   * @param {Hero} hero ヒーロー情報
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
