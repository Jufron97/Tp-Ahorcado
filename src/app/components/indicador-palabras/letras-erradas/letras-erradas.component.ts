import { Component, Input, OnInit } from "@angular/core";

@Component({
   selector: "app-letras-erradas",
   templateUrl: "./letras-erradas.component.html",
   styleUrls: ["./letras-erradas.component.scss"],
})
export class LetrasErradasComponent implements OnInit {
   @Input() letra: "";
   constructor() {}

   ngOnInit(): void {}
}
