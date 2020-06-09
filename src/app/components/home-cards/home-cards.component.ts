import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SuperheroApiService } from "../../services/superhero-api.service";

@Component({
  selector: "app-home-cards",
  templateUrl: "./home-cards.component.html",
  styleUrls: ["./home-cards.component.scss"],
})
export class HomeCardsComponent implements OnInit {
  public indicePaginacion = 1;

  constructor(
    private http: HttpClient,
    private HeroService: SuperheroApiService
  ) {}

  ngOnInit(): void {}

  public paginacionRight() {
    const offset = this.indicePaginacion * 20;
    this.indicePaginacion++;
    console.log(this.indicePaginacion);
  }

  public paginacionLeft() {
    if (this.indicePaginacion == 1) return;
    this.indicePaginacion--;
    const offset = this.indicePaginacion * 20 - 20;
    console.log(this.indicePaginacion);
  }
}
