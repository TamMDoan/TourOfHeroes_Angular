import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  @Input() hero?: Hero;

  constructor(
    /* 
    ActivatedRoute holds info about the route to an instance
    of HeroDetailComoponent... will use it to extract id from route
    */
    private activatedRoute: ActivatedRoute, 
    /*
    Location is a angular service for interacting with browser.
    Will be able to navigate back to the previous view (back button)
    */
    private location: Location, 
    private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot is static image of route info after component was created
    // paramMap is a dictionary of route parameter values from the URL
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    // goes backward one step in the browser's history
    // convenient if you have multiple ways to get to the same page
    // it will go back the way that you came
    this.location.back();
  }

}
