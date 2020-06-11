import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SuperheroApiService } from "../../services/superhero-api.service";
import { map } from "rxjs/operators";
@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.scss"],
})
export class DescriptionComponent implements OnInit {
  public DescripcionHero;
  public loading: boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private HeroService: SuperheroApiService
  ) {
    this.getInformationHero();
  }

  ngOnInit(): void {}

  getInformationHero() {
    this.loading = true;
    const id = this.activatedRouter.snapshot.paramMap.get("id");
    console.log(this.HeroService.ObtenerHero(id));
    this.DescripcionHero = this.HeroService.ObtenerHero(id)
      .pipe(
        map((hero: any) => {
          return {
            HeroName: hero.name,
            HeroImage: hero.image.url,
            HeroId: hero.id,
            Hero1Aparicion: hero.biography["first-appearance"],
            HeroAlias: hero.biography.aliases,
            HeroFullName: hero.biography["full-name"],
            HeroWork: hero.work.occupation,
            HeroRaza: hero.appearance.race,
            HeroMarca: hero.biography.publisher,
            // ESTADISTICAS
            intelligence: hero.powerstats.intelligence,
            strength: hero.powerstats.strength,
            speed: hero.powerstats.speed,
            durability: hero.powerstats.durability,
            power: hero.powerstats.power,
            combat: hero.powerstats.combat,
          };
        })
      )
      .subscribe((heroInformation: any) => {
        this.loading = false;
        console.log(heroInformation);
        this.DescripcionHero = heroInformation;
      });
  }
}
