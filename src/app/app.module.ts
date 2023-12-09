import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ColorCardComponent } from './components/color-card/color-card.component'

export const DECLARATIONS = [
  AppComponent,
  ColorCardComponent
]

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
