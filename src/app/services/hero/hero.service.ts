import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private messageService: MessageService, private http: HttpClient) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    // HEROES is already a [], of makes it observable
    // const heroes = of(HEROES);
    this.log(`fetched heroes`);
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    // going through HEROES mock data for the hero with the id
    // that's the same as the paramater id. Keep in mind that 
    // you can do this!
    const hero = HEROES.find( h => h.id ===id)!;
    this.log(`fetched hero id=${id}`);
    return of(hero);
  }
}
