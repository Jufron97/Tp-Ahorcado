import { Component, OnInit } from "@angular/core";
import { AhorcadoService } from "src/app/services/ahorcado.service";

@Component({
   selector: "app-score",
   templateUrl: "./score.component.html",
   styleUrls: ["./score.component.scss"],
})
export class ScoreComponent implements OnInit {
   scoresBoard = [];

   constructor(public ahorcado: AhorcadoService) {}

   ngOnInit(): void {
      this.scoresBoard = this.ahorcado.getScoreBoard();
   }

   resetScore() {
      this.ahorcado.resetearScore();
      this.scoresBoard = this.ahorcado.getScoreBoard();
   }
}
