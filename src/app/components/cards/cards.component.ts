import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent implements OnInit {
  @Input() HeroInput: any;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  goToDescription(id: number) {
    console.log(id);
    this.router.navigate(["Description", id]);
  }
}
