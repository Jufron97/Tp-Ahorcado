import { ColorSwitcherComponent } from './components/nav/color-switcher/color-switcher.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { DibujoAhorcadoComponent } from './components/dibujo-ahorcado/dibujo-ahorcado.component';
import { IndicadorPalabrasComponent } from './components/indicador-palabras/indicador-palabras.component';
import { LetrasErradasComponent } from './components/indicador-palabras/letras-erradas/letras-erradas.component';
import { NavComponent } from './components/nav/nav.component';
import { LetrasJuegoComponent } from './components/indicador-palabras/letras-juego/letras-juego.component';
import { TecladoComponent } from './components/teclado/teclado.component';
import { TecladoLetraComponent } from './components/teclado/teclado-letra/teclado-letra.component';
import { NameSelectComponent } from './components/name-select/name-select.component';
import { ScoreComponent } from './components/score/score.component';
import { DifficultySelectorComponent } from './components/difficulty-selector/difficulty-selector.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DifficultyCardComponent } from './components/difficulty-selector/difficulty-card/difficulty-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScoreTableComponent } from './components/score/score-table/score-table.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
   declarations: [
      AppComponent,
      AhorcadoComponent,
      DibujoAhorcadoComponent,
      IndicadorPalabrasComponent,
      LetrasErradasComponent,
      NavComponent,
      LetrasJuegoComponent,
      TecladoComponent,
      TecladoLetraComponent,
      NameSelectComponent,
      ScoreComponent,
      DifficultySelectorComponent,
      DifficultyCardComponent,
      ScoreTableComponent,
      ColorSwitcherComponent,
   ],
   imports: [
      BrowserModule,
      MatRippleModule,
      AppRoutingModule,
      RouterModule,
      FormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatChipsModule,
      MatSnackBarModule,
      MatProgressBarModule,
      MatSlideToggleModule,
      MatTooltipModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
