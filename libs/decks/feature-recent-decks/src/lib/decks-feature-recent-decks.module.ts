import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecentDecksContainerComponent } from './recent-decks-container/recent-decks-container.component';
import { SharedUiCardSummaryModule } from '@pkmn-tcg/shared/ui-card-summary';

@NgModule({
  imports: [
    CommonModule,
    SharedUiCardSummaryModule,
    RouterModule.forChild([
      {
        path: 'recent-decks',
        component: RecentDecksContainerComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recent-decks',
      },
    ]),
  ],
  declarations: [RecentDecksContainerComponent],
})
export class DecksFeatureRecentDecksModule {}
