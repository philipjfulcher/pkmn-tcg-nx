import { Injectable } from '@angular/core';
import { Deck } from '@pkmn-tcg/decks/model-decks';
import { CardsService } from '@pkmn-tcg/shared/data-access-cards';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  recentDecks$: Observable<Deck[]> = this.cardsService.allCards$.pipe(
    map((cards) => {
      return [
        {
          name: 'Deck 1',
          legality: 'standard',
          cards: [
            {
              card: cards[0],
              quantity: 60,
            },
          ],
        },
        {
          name: 'Deck 2',
          legality: 'standard',
          cards: [
            {
              card: cards[1],
              quantity: 60,
            },
          ],
        },
      ];
    })
  );
  constructor(private cardsService: CardsService) {}
}
