import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { CardComponent } from './components/card/card.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ListNavComponent } from './components/list-nav/list-nav.component';
import { ListNavItemComponent } from './components/list-nav-item/list-nav-item.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryCardComponent,
    ButtonComponent,
    CardComponent,
    SummaryPageComponent,
    ListPageComponent,
    ListNavComponent,
    ListNavItemComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
