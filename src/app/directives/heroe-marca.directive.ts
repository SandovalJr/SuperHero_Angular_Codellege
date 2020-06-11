import { Directive, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
  selector: "[appHeroeMarca]",
})
export class HeroeMarcaDirective {
  @Input() nameType: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ChanceColorBrand();
  }

  ChanceColorBrand() {

    switch (this.nameType) {
      case "Marvel Comics":
        // this.render.setStyle(this.el.nativeElement, 'color', "green");
        // this.render.setStyle(this.el.nativeElement, "background", "red");

        break;

      case "DC Comics":
        break;

      case "Dark Horse Comics":
        break;

      case "Sharon Carter":
        break;
    }
  }
}
