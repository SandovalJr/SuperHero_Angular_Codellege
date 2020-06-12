import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { SearchHeroService } from "./../../services/search-hero.service";
import { fromEvent } from "rxjs";
import { tap, debounceTime, pluck, switchMap, map } from "rxjs/operators";
// import Swal from 'sweetalert2';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  public loading: boolean = false;
  public heroResult: any = {}

  public ArrayHeros: Array<any> = [];

  @ViewChild("inputSuperHeroSearch") inputSuperHeroSearch: ElementRef;



  constructor(private router: Router, private HeroService: SearchHeroService) {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.GetHeroSearch();

  }

  ngOnInit(): void {}

  GetHeroSearch() {
    this.ArrayHeros = [];

    fromEvent(this.inputSuperHeroSearch.nativeElement, "keyup")
      .pipe(
        tap(() => (this.loading = true)),
        debounceTime(1500),
        pluck("target", "value"),
        switchMap((nombreHero: string) =>
          this.HeroService.ObtenerHero(nombreHero).pipe(
            map((heroInformation: any) => {
              this.ArrayHeros = []
              return {
                HeroName: heroInformation.results[0].name,
                HeroImage: heroInformation.results[0].image.url,
                HeroId: heroInformation.results[0].id,
              };
            })
          )
        )
      )
      .subscribe((hero) => {
        (this.loading = false, this.heroResult = hero)
        ;
      });
  }
}
