import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '@pkmn-tcg/shared/model-card';
import { map, shareReplay } from 'rxjs/operators';

interface CardsResponse {
  cards: Card[];
}

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  allCards$ = this.http
    .get<CardsResponse>('https://api.pokemontcg.io/v1/cards?setCode=base1')
    .pipe(
      map((response) => {
        return response.cards.sort((a: Card, b: Card) => {
          return parseInt(a.number, 10) - parseInt(b.number, 10);
        });
      }),
      shareReplay(1)
    );

  constructor(private http: HttpClient) {}
}
