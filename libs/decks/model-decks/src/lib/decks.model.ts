import { Card } from '@pkmn-tcg/shared/model-card';

export interface Deck {
  name: string;
  legality: 'expanded' | 'standard';
  cards: DeckCardEntry[]
}

export interface DeckCardEntry {
  quantity: number;
  card: Card;
}