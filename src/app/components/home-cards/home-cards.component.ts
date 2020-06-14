import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SuperheroApiService } from "../../services/superhero-api.service";
import { concatMap, map } from "rxjs/operators";
import { from } from "rxjs";

@Component({
  selector: "app-home-cards",
  templateUrl: "./home-cards.component.html",
  styleUrls: ["./home-cards.component.scss"],
})
export class HomeCardsComponent implements OnInit {
  public indicePaginacion = 1;
  public pageHero: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public ArrayHeros: Array<any> = [];

  // Heros
  // public HeroFiltrado: any;
  public loading: boolean = false;

  constructor(
    private http: HttpClient,
    private HeroService: SuperheroApiService
  ) {
    window.scrollTo(0, 0);

    this.getSuperHero();
  }

  ngOnInit(): void {}

  public getSuperHero() {
    this.ArrayHeros = [];

    this.loading = true;
    from(this.pageHero)
      .pipe(
        concatMap((id: number) =>
          this.HeroService.ObtenerHero(id).pipe(
            map((hero: any) => {
              return {
                HeroName: hero.name,
                HeroImage: hero.image.url,
                HeroId: hero.id,
              };
            })
          )
        )
      )
      .subscribe((heroInformation: any) => {
        this.loading = false;
        console.log(heroInformation);
        this.ArrayHeros.push(heroInformation);
      });
  }

  public paginacionRight() {
    this.indicePaginacion++;

    for (let x = 0; x < this.pageHero.length; x++) {
      this.pageHero[x] += 12;
    }
    console.log(this.pageHero);

    this.getSuperHero();
  }

  public paginacionLeft() {
    if (this.indicePaginacion == 1) return;
    for (let x = 0; x < this.pageHero.length; x++) {
      this.pageHero[x] -= 12;
    }
    console.log(this.pageHero);

    this.indicePaginacion--;
    this.getSuperHero();
  }
}
