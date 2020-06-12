import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SearchHeroService {

  public urlApi = `https://superheroapi.com/api.php/`;
  public idApi = `613465966190644/search/`;
  constructor(private http: HttpClient) {}

  public ObtenerHero(hero:any) {
    // console.log(this.http.get(`${this.urlApi}${this.idApi}/${id}`));
    // console.log(id);
    console.log(`${this.urlApi}${this.idApi}${hero}`);


    return this.http.get(`${this.urlApi}${this.idApi}${hero}`);
  }
}
