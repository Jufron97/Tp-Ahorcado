import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AhorcadoComponent } from "./components/ahorcado/ahorcado.component";
import { DifficultySelectorComponent } from "./components/difficulty-selector/difficulty-selector.component";
import { NameSelectComponent } from "./components/name-select/name-select.component";
import { ScoreComponent } from "./components/score/score.component";
import { RouterModule } from "@angular/router";

const appRoutes = [
   { path: "score", component: ScoreComponent },
   { path: "name", component: NameSelectComponent },
   { path: "game", component: AhorcadoComponent },
   { path: "difficulty", component: DifficultySelectorComponent },
   { path: "", redirectTo: "/name", pathMatch: "full" },
   { path: "**", component: NameSelectComponent },
];

@NgModule({
   declarations: [],
   imports: [CommonModule, RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
