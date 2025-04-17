import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginservisesService } from '../../Core/services/RegisterService/loginservises.service';

@Component({
  selector: 'app-nav-blank',
  standalone:true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent {
_Logout = inject(LoginservisesService);
}
