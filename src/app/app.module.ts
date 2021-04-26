import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustomComponent } from './components/custom/custom.component';
import { PlayerboxComponent } from './components/playerbox/playerbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovementComponent } from './components/movement/movement.component';
import { ItemComponent } from './components/movement/item/item.component';
import { GameComponent } from './components/game/game.component';
import { SelectMovementComponent } from './components/game/select-movement/select-movement.component';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomComponent,
    PlayerboxComponent,
    MovementComponent,
    ItemComponent,
    GameComponent,
    SelectMovementComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
