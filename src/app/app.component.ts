import { Component, Input } from "@angular/core";

@Component({
  standalone: false,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @Input() cursoId: string = ""
  constructor() {
  }

}
