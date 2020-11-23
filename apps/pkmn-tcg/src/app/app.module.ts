import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreDataAccessAuthModule } from '@pkmn-tcg/core/data-access-auth';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreDataAccessAuthModule,
    RouterModule.forRoot([
      {
        path: 'cards',
        loadChildren: () =>
          import('@pkmn-tcg/cards/feature-search').then(
            (m) => m.CardsFeatureSearchModule
          ),
      },
      {
        path: 'decks',
        loadChildren: () =>
          import('@pkmn-tcg/decks/feature-recent-decks').then(
            (m) => m.DecksFeatureRecentDecksModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
