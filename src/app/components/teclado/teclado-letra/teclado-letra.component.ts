import { Component, Input, OnInit } from "@angular/core";
import { AhorcadoService } from "src/app/services/ahorcado.service";

@Component({
   selector: "app-teclado-letra",
   templateUrl: "./teclado-letra.component.html",
   styleUrls: ["./teclado-letra.component.scss"],
})
export class TecladoLetraComponent implements OnInit {
   @Input() letra: string = '';
   constructor(public ahorcado: AhorcadoService) {}

   ngOnInit(): void {}

   press() {
      this.ahorcado.ingresarLetra(this.letra);
   }
   isPressed(): boolean {
      return this.ahorcado.letrasIngresadas.includes(this.letra);
   }
   isCorrect(): boolean {
      return this.ahorcado.letrasAcertadas.includes(this.letra);
   }
   isWrong(): boolean {
      return this.ahorcado.letrasErradas.includes(this.letra);
   }
}
