import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AhorcadoService } from 'src/app/services/ahorcado.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThisReceiver } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
   selector: 'app-indicador-palabras',
   templateUrl: './indicador-palabras.component.html',
   styleUrls: ['./indicador-palabras.component.scss'],
})
export class IndicadorPalabrasComponent implements OnInit {
   constructor(
      private ahorcadoService: AhorcadoService,
      private router: Router,
      private _snackBar: MatSnackBar
   ) {}
   palabraAArriesgar = '';

   ngOnInit(): void {
      if (
         this.ahorcadoService.dificultad === undefined ||
         this.ahorcadoService.dificultad === null
      ) {
         this.router.navigate(['difficulty']);
         return;
      }
   }
   letrasErradas() {
      return this.ahorcadoService.letrasErradas;
   }

   palabraJuego(): Array<string> {
      // devuelve la palabra. si no hay, selecciona segun la dificultad.

      if (this.ahorcadoService.palabra) {
         return this.ahorcadoService.palabra.split('');
      } else {
         this.ahorcadoService.obtenerPalabra();
         return this.ahorcadoService.palabra.split('');
      }
   }
   mostrarPista(): Boolean {
      this._snackBar.open(this.ahorcadoService.getPista(), 'Cerrar', {
         duration: 5000,
         panelClass: ['primary'],
         horizontalPosition: 'center',
         verticalPosition: 'bottom',
      });
      return true;
   }

   arriesgarPalabra(palabra: String) {
      if (!palabra) return;
      this.palabraAArriesgar = '';
      return this.ahorcadoService.arriesgarPalabra(palabra);
   }
}
