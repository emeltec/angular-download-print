import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { PrincessComponent } from './heroes/princess/princess.component';
import { HeroesRojosComponent } from './heroes/heroes-rojos/heroes-rojos.component';
import { HeroesVerdesComponent } from './heroes/heroes-verdes/heroes-verdes.component';
import { HeroesMenuComponent } from './heroes/heroes-menu/heroes-menu.component';
import { WidgetAsideComponent } from './heroes/widget-aside/widget-aside.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'heroes'
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    children: [
      {
        path:'',
        component:HeroesMenuComponent,
      },
      {
        path:'heroesrojos',
        component:HeroesRojosComponent,
      },
      {
        path:'heroesverdes',
        component: HeroesVerdesComponent
      },
      {
        path:'',
        component:WidgetAsideComponent,
        outlet:'aside'
      }
      
    ]
  },
  {
    path:'princess',
    component:PrincessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
