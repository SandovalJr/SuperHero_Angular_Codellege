import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SuperheroApiService {
  public urlApi = `https://superheroapi.com/api/`;
  public idApi = `613465966190644`;
  constructor(private http: HttpClient) {}

  public ObtenerHero(id: number) {
    return this.http.get(`${this.urlApi}${this.idApi}`);
  }
}
