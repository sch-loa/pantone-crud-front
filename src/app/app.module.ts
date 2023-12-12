import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ColorCardComponent } from './components/color-card/color-card.component'
import { ColorChartComponent } from './pages/color-chart/color-chart.component'
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { FilterComponent } from './components/filter/filter.component'
import { CheckboxComponent } from './components/shared/input/checkbox/checkbox.component'
import { FooterComponent } from './components/footer/footer.component'
import { HttpClientModule } from '@angular/common/http'

export const DECLARATIONS = [
  AppComponent,
  ColorCardComponent,
  ColorChartComponent,
  SearchBarComponent,
  FilterComponent,
  CheckboxComponent, 
  FooterComponent
]

export const IMPORTS = [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
