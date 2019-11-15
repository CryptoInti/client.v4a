import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ListComponent } from './list/list.component';
import { CapsComponent } from './caps/caps.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'list', component: ListComponent },
  { path: 'answer', component: AnswerComponent },
  { path: 'caps', component: CapsComponent }
  // { path: '', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
