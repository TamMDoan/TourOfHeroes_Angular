import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService){}
  
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(1, 5)
    );
  }
}
