import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiCardSummaryModule } from '@pkmn-tcg/shared/ui-card-summary';
import { SearchContainerComponent } from './search-container/search-container.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SearchContainerComponent }]),
    SharedUiCardSummaryModule,
  ],
  declarations: [SearchContainerComponent],
})
export class CardsFeatureSearchModule {}
