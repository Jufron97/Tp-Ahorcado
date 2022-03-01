import { Component, OnInit } from "@angular/core";
import { AhorcadoService } from "src/app/services/ahorcado.service";
import { Router } from "@angular/router";

@Component({
   selector: "app-name-select",
   templateUrl: "./name-select.component.html",
   styleUrls: ["./name-select.component.scss"],
})
export class NameSelectComponent implements OnInit {
   name: string = "";

   constructor(private ahorcado: AhorcadoService, private router: Router) {}

   ngOnInit(): void {}

   selectName() {
      this.ahorcado.setearNombreUsuario(this.name);
      this.router.navigate(["difficulty"]);
   }
}
