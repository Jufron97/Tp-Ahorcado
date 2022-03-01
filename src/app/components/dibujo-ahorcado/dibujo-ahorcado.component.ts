import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AhorcadoService } from 'src/app/services/ahorcado.service';
import { ThemePickerService } from 'src/app/services/theme-picker.service';

@Component({
   selector: 'app-dibujo-ahorcado',
   templateUrl: './dibujo-ahorcado.component.html',
   styleUrls: ['./dibujo-ahorcado.component.scss'],
})
export class DibujoAhorcadoComponent implements OnInit {
   constructor(private ahorcado: AhorcadoService, private themePicker: ThemePickerService) {}

   imageTheme: string;

   ngOnInit() {
      this.themePicker.theme$.subscribe((theme) => (this.imageTheme = `ahorcado-img__${theme}`));
   }

   imagePath(): string {
      return this.getPathByNumber(this.contadorVidas());
   }
   getPathByNumber(number: number): string {
      return `assets/images/ahorcado/ahorcado-${number}.gif`;
   }

   contadorVidas() {
      return this.ahorcado.letrasErradas.length;
   }
}
