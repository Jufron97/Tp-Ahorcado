import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AhorcadoService } from "src/app/services/ahorcado.service";

@Component({
   selector: "app-difficulty-card",
   templateUrl: "./difficulty-card.component.html",
   styleUrls: ["./difficulty-card.component.scss"],
})
export class DifficultyCardComponent implements OnInit {
   @Input() estrellas: any;
   @Input() dificultad: string;
   @Input() texto: string;
   @Input() difKey: string;

   constructor(private ahorcado: AhorcadoService, private router: Router) {}

   ngOnInit(): void {}

   fullStars() {
      return [].constructor(parseInt(this.estrellas));
   }
   emptyStars() {
      return [].constructor(3 - parseInt(this.estrellas));
   }
   selectDificulty() {
      const rta = this.ahorcado.setearDificultad(this.difKey);
      if (rta === true) {
         this.ahorcado.reiniciarPartida();
         this.router.navigate(["game"]);
         return true;
      }
      return false;
   }
   selectorDificultad() {
      return `difficulty-selector-${this.difKey}`;
   }
}
