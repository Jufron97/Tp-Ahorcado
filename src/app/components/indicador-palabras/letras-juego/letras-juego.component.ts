import { Component, Input, OnInit } from "@angular/core";
import { AhorcadoService } from "src/app/services/ahorcado.service";

@Component({
   selector: "app-letras-juego",
   templateUrl: "./letras-juego.component.html",
   styleUrls: ["./letras-juego.component.scss"],
})
export class LetrasJuegoComponent implements OnInit {
   @Input() letra: string = "";

   constructor(private ahorcado: AhorcadoService) {}

   ngOnInit(): void {}

   letraPertenece(): boolean {
      return this.ahorcado.letrasAcertadas.includes(this.letra);
   }
}
