import { Component } from '@angular/core';
import { NavBlankComponent } from "../../Components/nav-blank/nav-blank.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-blank-lauout',
  imports: [NavBlankComponent, RouterOutlet, FooterComponent],
  templateUrl: './blank-lauout.component.html',
  styleUrl: './blank-lauout.component.scss'
})
export class BlankLauoutComponent {

}
