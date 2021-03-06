import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './components/custom/custom.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { AuthGuard } from './auth.guard';
import { ResultComponent } from './components/game/result/result.component';

const routes: Routes = [
  { path: 'game/result', component: ResultComponent, canActivate: [AuthGuard]  },
  { path: 'game', component: GameComponent, canActivate: [AuthGuard]  },
  { path: 'custom', component: CustomComponent, canActivate: [AuthGuard]  },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
