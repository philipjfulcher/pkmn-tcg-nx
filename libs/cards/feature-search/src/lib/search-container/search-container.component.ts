import { Component, OnInit } from '@angular/core';
import { CardsService } from '@pkmn-tcg/shared/data-access-cards';

@Component({
  selector: 'pkmn-tcg-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  cards$ = this.cardsService.allCards$;

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }

}
