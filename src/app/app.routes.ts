import { RouterModule, Routes } from "@angular/router";

// components
import { HomeCardsComponent } from "../app/components/home-cards/home-cards.component";
import { DescriptionComponent } from "./components/description/description.component";
const routes: Routes = [
  { path: "Home", component: HomeCardsComponent },
  { path: "Description/:id", component: DescriptionComponent },
  // comience en home
  { path: "**", pathMatch: "full", redirectTo: "Home" },
];
export const app_routes = RouterModule.forRoot(routes);
