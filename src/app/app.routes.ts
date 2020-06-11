import { RouterModule, Routes } from "@angular/router";

// components
import { HomeCardsComponent } from "../app/components/home-cards/home-cards.component";
import { DescriptionComponent } from "./components/description/description.component";
import { SearchComponent } from "./components/search/search.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  { path: "Home", component: HomeCardsComponent },
  { path: "Description/:id", component: DescriptionComponent },
  { path: "Search", component: SearchComponent },
  { path: "About", component: AboutComponent },
  // comience en home
  { path: "**", pathMatch: "full", redirectTo: "Home" },
];
export const app_routes = RouterModule.forRoot(routes);
