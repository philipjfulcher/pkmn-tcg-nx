import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSummaryComponent } from './card-summary/card-summary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardSummaryComponent],
  exports: [CardSummaryComponent]
})
export class SharedUiCardSummaryModule {}
