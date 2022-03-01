import { Component, Input, OnInit } from "@angular/core";

@Component({
   selector: "app-score-table",
   templateUrl: "./score-table.component.html",
   styleUrls: ["./score-table.component.scss"],
})
export class ScoreTableComponent {
   @Input() board: any;
   constructor() {}

   getPercentage(right: number, wrong: number) {
      let percetage;
      if (right + wrong === 0) {
         percetage = 0;
      } else {
         percetage = (100 * right) / (right + wrong);
      }
      return percetage.toFixed(1);
   }
}
