import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Card } from '@pkmn-tcg/shared/model-card';

@Component({
  selector: 'pkmn-tcg-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSummaryComponent implements OnInit {
  @Input() card: Card;

  constructor() {}

  ngOnInit(): void {
    console.log(this.card);
  }
}
