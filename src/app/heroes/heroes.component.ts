import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero/hero.service';
import { MessageService } from '../services/message/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',

})
export class HeroesComponent {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  /*
  Reserve constructor for minimal initialization
  such as wiring parameters to properties.
  The constructor shouldn't do ANYTHING.
  */
  constructor(private heroService: HeroService, private messageService: MessageService){
    // this constructor is wiring heroService to a singleton instance of HeroService
  }

  /*
  If you need any methods called right away , do it in ngOnInit
  */
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
  }

  getHeroes(): void {
    /*
    Subscribe is an asynchronous request. Async requests are better
    especially when getting data from a server bc it takes into consideration
    possible hiccups and delays when making and receiving requests.
    */
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }
}
