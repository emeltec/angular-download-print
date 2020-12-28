import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PrincessComponent } from './heroes/princess/princess.component';
import { HeroesRojosComponent } from './heroes/heroes-rojos/heroes-rojos.component';
import { HeroesVerdesComponent } from './heroes/heroes-verdes/heroes-verdes.component';
import { HeroesMenuComponent } from './heroes/heroes-menu/heroes-menu.component';
import { ElementosModule } from './elementos/elementos.module';
import { WidgetAsideComponent } from './heroes/widget-aside/widget-aside.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      PrincessComponent,
      HeroesRojosComponent,
      HeroesVerdesComponent,
      HeroesMenuComponent,
      WidgetAsideComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ElementosModule,
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ]
})
export class AppModule { }
