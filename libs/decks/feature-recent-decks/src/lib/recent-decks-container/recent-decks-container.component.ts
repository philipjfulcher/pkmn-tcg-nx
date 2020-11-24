import { Component, OnInit } from '@angular/core';
import { DecksService } from '@pkmn-tcg/decks/data-access-decks';
@Component({
  selector: 'pkmn-tcg-recent-decks-container',
  templateUrl: './recent-decks-container.component.html',
  styleUrls: ['./recent-decks-container.component.css']
})
export class RecentDecksContainerComponent implements OnInit {
  decks$ = this.decksService.recentDecks$;
  
  constructor(private decksService: DecksService) { }

  ngOnInit(): void {
  }

}
